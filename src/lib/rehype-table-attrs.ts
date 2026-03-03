import type { Root, Element } from 'hast';
import type { Plugin } from 'unified';

/**
 * Rehype plugin to ensure hProperties on table nodes are properly applied.
 * This handles cases where rehype-stringify might not apply hProperties correctly to tables.
 */
export default function rehypeTableAttrs(): Plugin<[], Root> {
  return function transformer(tree: Root) {
    function visit(node: any): void {
      if (node.type === 'element' && node.tagName === 'table' && node.data?.hProperties) {
        const props = node.data.hProperties as Record<string, any>;
        const element = node as Element;
        
        // Ensure className is converted to class attribute
        if (props.className) {
          const classes = Array.isArray(props.className) 
            ? props.className 
            : typeof props.className === 'string'
            ? props.className.split(/\s+/)
            : [];
          
          if (classes.length > 0) {
            const existingClass = element.properties?.className || element.properties?.class;
            const existingClasses = typeof existingClass === 'string'
              ? existingClass.split(/\s+/)
              : Array.isArray(existingClass)
              ? existingClass
              : [];
            
            const merged = [...existingClasses];
            for (const cls of classes) {
              if (cls && !merged.includes(cls)) {
                merged.push(cls);
              }
            }
            
            element.properties = element.properties || {};
            element.properties.className = merged;
          }
        }
        
        // Ensure id is set
        if (props.id) {
          element.properties = element.properties || {};
          element.properties.id = props.id;
        }
      }
      
      // Recursively visit children
      if (node.children && Array.isArray(node.children)) {
        for (const child of node.children) {
          visit(child);
        }
      }
    }
    
    visit(tree);
  };
}
