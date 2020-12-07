let id = 1;

export const uuid = () => {
  id += 1;
  return `uuid${id}`;
};
