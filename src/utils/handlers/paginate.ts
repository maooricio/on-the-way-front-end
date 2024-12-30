/* eslint-disable @typescript-eslint/no-explicit-any */
export const paginateList = (array: any[], itemsPerPage: number = 10) => {
  const pages: any[][] = [];

  for (let i = 0; i < array.length; i += itemsPerPage) {
    pages.push(array.slice(i, i + itemsPerPage));
  }

  return pages;
};
