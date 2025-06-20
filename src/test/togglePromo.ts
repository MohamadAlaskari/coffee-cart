export const togglePromo = (count: number): boolean => {
  return count > 0 && count % 3 == 0;
};
