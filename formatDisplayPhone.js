// Máscara para deixar números em formato de número de telefone
// Mask convert Number to brasilian phone-number format

export const formatDisplayPhone = (onlyNumbers) => {
  if (!onlyNumbers) {
    return onlyNumbers;
  }
  const len = onlyNumbers.length;
  const dd = onlyNumbers.substr(0, 2);
  const final = onlyNumbers.substr(len - 4, 4);
  const middle = onlyNumbers.split(final)[0].split(dd)[1];

  return `(${dd}) ${middle}-${final}`;
};