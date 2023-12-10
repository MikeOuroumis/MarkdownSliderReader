export const transformContentToPages = (
  content: string,
  charsPerPage: number,
) => {
  content = removeTitleSection(content);
  content = consolidateNewLines(content);

  return paginateContent(content, charsPerPage);
};

function removeTitleSection(content: string) {
  const titleSectionRegex = /#\n\n(.+)\n\n##\n\n###\n\n####\n/;
  return content.replace(titleSectionRegex, '');
}

function consolidateNewLines(content: string) {
  return content.replace(/\n\n/g, '\n ');
}

export function paginateContent(content: string, charsPerPage: number) {
  const charsToRemovePerNewLine = 10;
  const pages: string[] = [];

  let page = '';
  let currentCharsPerPage = charsPerPage;
  let charsCount = 0;

  for (let j = 0; j < content.length; j++) {
    const char = content[j];
    if (charsCount < currentCharsPerPage) {
      page += char;
      charsCount++;
    }

    if (char === '\n') {
      // Reduce chars per page for each newline
      currentCharsPerPage = Math.max(
        0,
        currentCharsPerPage - charsToRemovePerNewLine,
      );
    }

    // Check if the current page has reached its character limit
    if (charsCount >= currentCharsPerPage || j === content.length - 1) {
      // if the content doesn't end with a space, add one character to the page
      if (char !== ' ' && char !== '\n') {
        page += content[j + 1];
        charsCount++;
      } else {
        pages.push(page);
        page = '';
        charsCount = 0;
        currentCharsPerPage = charsPerPage; // Reset for new page
      }
    }
  }

  if (page) {
    pages.push(page); // Add any remaining content to the last page
  }

  return pages;
}

export function parseTitle(text: string) {
  const lines = text.split('\n');
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() && !lines[i].startsWith('#')) {
      // The first line that has content and is not just hashes is likely the title
      return lines[i].trim();
    }
  }
  return ''; // Return an empty string if no title is found
}

export function getTitlePageIndex(
  content: string,
  title: string,
  charsPerLine: number,
  linesPerPage: number,
) {
  const words = content.split(' ');
  let currentPage = '';
  let currentLine = '';
  let pageIndex = 0;
  let titleFound = false;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if ((currentLine + word).length > charsPerLine) {
      currentPage += currentLine + '\n';
      currentLine = word + ' ';

      if (currentPage.split('\n').length >= linesPerPage) {
        if (currentPage.includes(title)) {
          titleFound = true;
          break;
        }
        currentPage = '';
        pageIndex++;
      }
    } else {
      currentLine += word + ' ';
    }
  }

  // Check the last page if the title hasn't been found yet
  if (
    !titleFound &&
    currentLine &&
    (currentPage + currentLine).includes(title)
  ) {
    return pageIndex;
  }

  return titleFound ? pageIndex : -1; // Return -1 if title is not found in any page
}
