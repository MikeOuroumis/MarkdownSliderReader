import {getTitlePageIndex, parseTitle, transformContentToPages} from './text';
import {princeContent} from '../assets/princeContent';
import {Dimensions} from 'react-native';

const CHAR_WIDTH_FACTOR = 0.5;
const LINE_HEIGHT_FACTOR = 1.5;
const HEADER_HEIGHT = 60;
const CHARS_PER_PAGE_OFFSET = 100;

export function prepareContent(pagePadding: number, fontSize: number) {
  const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
  const adjustedScreenHeight = screenHeight - HEADER_HEIGHT;

  const charsPerLine = calculateCharsPerLine(
    screenWidth,
    pagePadding,
    fontSize,
  );
  const linesPerPage = calculateLinesPerPage(adjustedScreenHeight, fontSize);
  const charsPerPage = charsPerLine * linesPerPage - CHARS_PER_PAGE_OFFSET;

  const title = parseTitle(princeContent);
  const titlePageIndex = getTitlePageIndex(
    princeContent,
    title,
    charsPerLine,
    linesPerPage,
  );
  const pages = transformContentToPages(princeContent, charsPerPage);

  return {pages, title, titlePageIndex};
}

function calculateCharsPerLine(
  screenWidth: number,
  pagePadding: number,
  fontSize: number,
) {
  return Math.floor(
    (screenWidth - pagePadding * 2) / (fontSize * CHAR_WIDTH_FACTOR),
  );
}

function calculateLinesPerPage(screenHeight: number, fontSize: number) {
  return Math.floor(screenHeight / (fontSize * LINE_HEIGHT_FACTOR));
}
