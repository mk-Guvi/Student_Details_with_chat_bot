/**
 * It returns true if the value is a number, and false if it's not.
 * @param {string} value - string - the value of the input field
 * @returns A function that takes a string and returns a boolean.
 */
export const isNumber = (value: string) => {
  if (!value) {
    return false;
  }
  const re = /^[0-9]+$/;
  return re.test(value) ? true : false;
};
