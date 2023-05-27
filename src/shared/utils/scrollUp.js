export const scrollUp = (top = 0) => {
  window.scrollTo({
    top: top,
    behavior: 'smooth',
  });
};
