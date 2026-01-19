import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';
import smartypants from 'remark-smartypants';

/**
 * Placeholder pattern used to mark checkbox positions in markdown.
 * Format: MARKDOWN_CHECKBOX_PLACEHOLDER_{index}_{content}
 */
const CHECKBOX_PLACEHOLDER_PREFIX = 'MARKDOWN_CHECKBOX_PLACEHOLDER_';

/**
 * Regex pattern to match checkbox placeholders in HTML after markdown processing.
 * Placeholders are wrapped in <code> tags by the markdown processor.
 */
const PLACEHOLDER_REGEX = /<code>MARKDOWN_CHECKBOX_PLACEHOLDER_(\d+)_(.*?)<\/code>/g;

/**
 * Pre-processes markdown content to replace [ ] patterns with placeholders.
 * This prevents GFM from converting them into disabled task list items.
 * 
 * @param markdownContent - Raw markdown content
 * @returns Object with processed markdown and placeholder count
 */
export function preprocessCheckboxes(markdownContent: string): {
  processedMarkdown: string;
  placeholderCount: number;
} {
  const lines = markdownContent.split('\n');
  const processedLines: string[] = [];
  let placeholderIndex = 0;

  // First pass: Handle headings, standalone [ ] lines, and list items with [ ]
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check for headings with [ ] first (more specific pattern)
    // Match headings like: ## [ ] My heading 2 or ### [ ] My heading 3
    // Also handle blockquotes: > ## [ ] My heading
    const headingCheckboxMatch = line.match(/^(>?\s*)(#{1,6})\s+\[ \](.*)$/);
    
    if (headingCheckboxMatch) {
      const blockquoteMarker = headingCheckboxMatch[1] || ''; // Capture the > and any spaces
      const headingLevel = headingCheckboxMatch[2]; // The # characters
      const content = headingCheckboxMatch[3].trim();
      
      // Replace with heading structure + placeholder
      // The placeholder will be processed after markdown conversion
      const escapedContent = content.replace(/`/g, '&#96;');
      processedLines.push(
        `${blockquoteMarker}${headingLevel} \`${CHECKBOX_PLACEHOLDER_PREFIX}${placeholderIndex++}_${escapedContent}\``
      );
    } else {
      // Match lines that start with [ ] (with optional leading whitespace) OR list items with [ ]
      // This handles both: "[ ] content" and "- [ ] content" or "* [ ] content"
      // Also handle blockquotes: > - [ ] content or > [ ] content
      const checkboxMatch = line.match(/^(>?\s*)(\s*)([-*+]|\d+\.)?\s*\[ \](.*)$/);
      
      if (checkboxMatch) {
        const blockquoteMarker = checkboxMatch[1] || '';
        const leadingWhitespace = checkboxMatch[2];
        const content = checkboxMatch[4].trim();
        
        // Replace with a text-based placeholder that won't be processed by markdown
        // Use inline code format to prevent markdown processing, then we'll extract it after HTML conversion
        // The placeholder will become <code>MARKDOWN_CHECKBOX_PLACEHOLDER_index_content</code>
        const escapedContent = content.replace(/`/g, '&#96;');
        processedLines.push(
          `${blockquoteMarker}${leadingWhitespace}\`${CHECKBOX_PLACEHOLDER_PREFIX}${placeholderIndex++}_${escapedContent}\``
        );
      } else {
        processedLines.push(line);
      }
    }
  }

  let processedMarkdown = processedLines.join('\n');

  // Second pass: Handle [ ] patterns inside table cells
  // Match table rows and process [ ] patterns within cell content
  // Format: | cell1 | [ ] cell2 | cell3 | or | [ ] cell1 | cell2 |
  processedMarkdown = processedMarkdown.replace(
    /\|([^|]*?)\[ \]([^|]*?)\|/g,
    (match, before, after) => {
      const content = after.trim();
      const beforeContent = before.trim();
      const escapedContent = content.replace(/`/g, '&#96;');
      
      // Replace [ ] with placeholder, preserving the table structure
      const cellContent = beforeContent
        ? `${beforeContent} \`${CHECKBOX_PLACEHOLDER_PREFIX}${placeholderIndex++}_${escapedContent}\``
        : `\`${CHECKBOX_PLACEHOLDER_PREFIX}${placeholderIndex++}_${escapedContent}\``;
      
      return `|${cellContent}|`;
    }
  );

  return {
    processedMarkdown,
    placeholderCount: placeholderIndex
  };
}

/**
 * Creates HTML for a single checkbox with its content.
 * The content is processed through markdown to handle formatting like bold, links, etc.
 * 
 * @param rawContent - The text content after the [ ] checkbox
 * @param checkboxId - Unique ID for the checkbox
 * @param isInHeading - Whether this checkbox is inside a heading tag
 * @returns HTML string with checkbox and formatted content
 */
async function createCheckboxHtml(rawContent: string, checkboxId: string, isInHeading: boolean = false): Promise<string> {
  const checkboxHtml = `<input type="checkbox" class="markdown-checkbox" id="${checkboxId}" data-checkbox-id="${checkboxId}" style="cursor: pointer;" />`;
  
  // Process the content through markdown to handle bold, italic, links, etc.
  // This ensures markdown formatting in the content is properly converted
  const processedContent = await remark()
    .use(gfm)
    .use(smartypants, { dashes: 'oldschool' })  // Convert -- to en-dash (–) and --- to em-dash (—)
    .use(html, { sanitize: false })
    .process(rawContent.trim());
  
  const processedContentHtml = processedContent.toString().trim();
  
  // Remove wrapping <p> tags if present (they're often added by remark)
  const contentWithoutPTags = processedContentHtml.replace(/^<p>([\s\S]*?)<\/p>$/, '$1');
  
  // For headings, use inline format; for other contexts, use flex div
  if (isInHeading) {
    return `${checkboxHtml} <span class="markdown-checkbox-content">${contentWithoutPTags || ''}</span>`;
  } else {
    return `<div class="markdown-checkbox-line" style="display: flex; align-items: flex-start; gap: 0.5rem; margin: 0.5em 0;">${checkboxHtml}<span class="markdown-checkbox-content">${contentWithoutPTags || ''}</span></div>`;
  }
}

/**
 * Post-processes HTML content to replace checkbox placeholders with actual checkbox HTML.
 * 
 * @param htmlContent - HTML content with checkbox placeholders
 * @param postId - Unique identifier for the post (used to generate checkbox IDs)
 * @returns HTML content with checkboxes replaced
 */
export async function postprocessCheckboxes(
  htmlContent: string,
  postId: string
): Promise<string> {
  // Find all checkbox placeholders in the HTML
  const placeholders: Array<{ match: string; index: string; content: string }> = [];
  let placeholderMatch;
  
  while ((placeholderMatch = PLACEHOLDER_REGEX.exec(htmlContent)) !== null) {
    placeholders.push({
      match: placeholderMatch[0],
      index: placeholderMatch[1],
      content: placeholderMatch[2].replace(/&#96;/g, '`') // Decode backticks
    });
  }
  
  // Process all placeholders and replace them with actual checkbox HTML
  let processedHtml = htmlContent;
  let checkboxIndex = 0;
  
  for (const placeholder of placeholders) {
    const checkboxId = `checkbox-${postId}-${checkboxIndex++}`;
    
    // Check if this placeholder is inside a heading tag (h1-h6)
    // We need to find the placeholder in the HTML and check its context
    const placeholderIndex = processedHtml.indexOf(placeholder.match);
    if (placeholderIndex !== -1) {
      // Look backwards from the placeholder to find if it's inside a heading tag
      const beforePlaceholder = processedHtml.substring(0, placeholderIndex);
      
      // Find all opening and closing heading tags before the placeholder
      const headingOpenMatches = [...beforePlaceholder.matchAll(/<h[1-6][^>]*>/g)];
      const headingCloseMatches = [...beforePlaceholder.matchAll(/<\/h[1-6]>/g)];
      
      // Count unmatched opening tags (opening tags - closing tags)
      // If there's an unmatched opening tag, we're inside a heading
      const isInHeading = headingOpenMatches.length > headingCloseMatches.length;
      
      const checkboxHtml = await createCheckboxHtml(placeholder.content, checkboxId, isInHeading);
      processedHtml = processedHtml.replace(placeholder.match, checkboxHtml);
    } else {
      // Fallback if placeholder not found (shouldn't happen, but handle gracefully)
      const checkboxHtml = await createCheckboxHtml(placeholder.content, checkboxId, false);
      processedHtml = processedHtml.replace(placeholder.match, checkboxHtml);
    }
  }
  
  return processedHtml;
}
