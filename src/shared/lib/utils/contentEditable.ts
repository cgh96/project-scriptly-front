/**
 * contentEditable 요소가 실제로 비어있는지 확인
 */
export const isContentEditableEmpty = (element: HTMLElement): boolean => {
  // trim을 사용하면 '들여쓰기' 등의 공백이 제거되어 오류가 발생할 수 있음
  const textContent = element.textContent || '';
  const innerHTML = element.innerHTML;

  return !textContent || textContent?.length === 0 || innerHTML === '<br>' || innerHTML === '';
};

/**
 * contentEditable 요소의 불필요한 태그 정리
 */
export const clearContentEditable = (element: HTMLElement): void => {
  if (isContentEditableEmpty(element)) {
    element.innerHTML = '';
  }
};

/**
 * contentEditable의 실제 텍스트 내용 추출 (마크다운용)
 */
export const getCleanTextContent = (element: HTMLElement): string => {
  if (isContentEditableEmpty(element)) return '';
  return element.textContent?.trim() || '';
};
