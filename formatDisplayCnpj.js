// Máscara para deixar números em formato de CNPJ
// Mask convert Number to CNPJ format

export const formatDisplayCnpj = (onlyNumbers) => {
  if (!onlyNumbers) {
    return onlyNumbers;
  }
  const first = onlyNumbers.substr(0, 2);
  const second = onlyNumbers.substr(2, 3);
  const third = onlyNumbers.substr(5, 3);
  const fourth = onlyNumbers.substr(8, 4);
  const dv = onlyNumbers.substr(12);

  return `${first}.${second}.${third}/${fourth}-${dv}`;
};
