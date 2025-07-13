/**
 * Viewport height를 설정하는 함수
 * 모바일 브라우저에서 높이를 조절하기 위해 사용
 */
export const setViewportHeight = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};
