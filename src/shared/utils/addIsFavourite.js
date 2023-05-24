export const addIsFavouriteToItem = (item, ids) => {
  if (!item) return null;
  return {
    ...item,
    isFavourite: ids ? ids.includes(item?.id) : false,
  };
};

export const addIsFavouriteToList = (data, ids) => {
  if (!Array.isArray(data)) {
    return [
      {
        ...data,
        isFavourite: ids ? ids.includes(data?.id) : false,
      },
    ];
  }
  return data.map(item => ({
    ...item,
    isFavourite: ids ? ids.includes(item?.id) : false,
  }));
};
