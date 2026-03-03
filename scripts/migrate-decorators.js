// Simple migration script to convert old comment-based decorators
// to the new Jekyll-style tag/attribute syntax.
//
// Usage (from project root):
//   node scripts/migrate-decorators.js

const fs = require('fs');
const path = require('path');

const CONTENT_ROOT = path.join(process.cwd(), 'content');

function collectMarkdownFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectMarkdownFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }

  return files;
}

function migrateFile(filePath) {
  const original = fs.readFileSync(filePath, 'utf8');
  let updated = original;

  // 1) collapsible comments -> tags
  updated = updated.replace(
    /<!--\s*collapsible\s+closed\s*-->/gi,
    '{% collapsible closed %}',
  );

  updated = updated.replace(
    /<!--\s*collapsible\s*-->/gi,
    '{% collapsible %}',
  );

  // 2) no-copy-button comments -> {% no-copy %}
  updated = updated.replace(
    /<!--\s*no-copy-button\s*-->/gi,
    '{% no-copy %}',
  );

  // NOTE: We intentionally leave generic class comments (<!-- class-name -->)
  // as-is for now, since migrating them safely to Kramdown {: .class } syntax
  // would require understanding surrounding structure. You can gradually
  // replace those by hand with:
  //
  //   {: .class-name }
  //
  // on the line immediately following the element you want to decorate.

  if (updated !== original) {
    fs.writeFileSync(filePath, updated, 'utf8');
    console.log(`Migrated: ${path.relative(process.cwd(), filePath)}`);
  }
}

function main() {
  if (!fs.existsSync(CONTENT_ROOT)) {
    console.error(`Content directory not found: ${CONTENT_ROOT}`);
    process.exit(1);
  }

  const files = collectMarkdownFiles(CONTENT_ROOT);
  files.forEach(migrateFile);
}

main();

