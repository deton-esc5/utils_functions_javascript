// Converte string em número
// Convert string to number

export const convertStringToNumber = (value) => {
  const number = value.replace(/\./g, '').replace(/\,/g, '.');
  return Number.parseFloat(number);
};
