export const getPaginationLabels = ({ setLabels, totalPages, page }) => {
  if (totalPages <= 7)
    return setLabels(Array.from({ length: totalPages }, (_, i) => i + 1));
  if (page <= 4) {
    return setLabels([
      ...Array.from({ length: 5 }, (_, i) => i + 1),
      '',
      totalPages,
    ]);
  }
  if (page > totalPages - 5) {
    return setLabels([
      1,
      '',
      ...Array.from({ length: 5 }, (_, i) => totalPages - i).reverse(),
    ]);
  }
  setLabels([1, '', page - 1, page, page + 1, '', totalPages]);
};
