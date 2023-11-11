export const generateToken = () => {
  //* manual way to create Tokens
  return Date.now().toString(32) + Math.random().toString(32).substring(2);
};
