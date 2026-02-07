// Remark plugin to transform .md links to Starlight URLs
import { visit } from 'unist-util-visit';

export function remarkMdLinks() {
  return (tree, file) => {
    visit(tree, 'link', (node) => {
      if (node.url && node.url.endsWith('.md') && !node.url.startsWith('http')) {
        // Transform FILENAME.md to lowercase without .md
        // e.g., CREDENTIALS.md -> credentials
        const filename = node.url.replace('.md', '').toLowerCase();

        // Handle dev/ subdirectory
        if (node.url.startsWith('dev/')) {
          node.url = `/pki/dev/${filename.replace('dev/', '')}/`;
        } else {
          node.url = `/pki/${filename}/`;
        }
      }
    });
  };
}
