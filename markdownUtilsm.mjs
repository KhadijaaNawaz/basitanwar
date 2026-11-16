// markdownUtils.js

const unified = import('unified');
const remarkParse = import('remark-parse');
const remarkRehype = import('remark-rehype');
const rehypeStringify = import('rehype-stringify');

const applyHeadingStyles = (markdownContent) => {
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use((tree) => {
      tree.children.forEach((node) => {
        if (node.type === 'element' && /^h[1-6]$/.test(node.tagName)) {
          // Apply your custom styles to headings
          node.properties = {
            ...node.properties,
            style: {
              color: '#292d77',
              lineHeight: '1.6',
              marginTop: '20px',
              marginBottom: '20px',
              fontWeight: 600,
            },
          };
        }
      });
    })
    .use(rehypeStringify);

  const result = processor.processSync(markdownContent);
  return result.toString();
};

export default applyHeadingStyles; // Export the function directly

