import hljs from 'highlight.js';

export const getHighlightedCode = (
  text: string,
  language: string = 'xml',
): string => hljs.highlight(text, { language }).value;
