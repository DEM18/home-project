export const getCategoryIndex = (item, array) => {
  const index = array.findIndex((category) => category.name == item);
  return index;
};
