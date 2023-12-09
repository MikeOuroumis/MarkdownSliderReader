// Function to split Markdown content into pages
export const paginateContent = (content: string, pageSize: number) => {
  const pages = [];
  for (let i = 0; i < content.length; i += pageSize) {
    pages.push(content.substring(i, i + pageSize));
  }
  return pages;
};
