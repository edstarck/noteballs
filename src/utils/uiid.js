export const uiid = () => {
  const hash = new Date().getTime().toString();
  return parseInt(Math.random() * 100 * hash);
};
