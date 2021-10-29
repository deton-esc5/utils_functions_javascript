// Máscara para deixar números em formato de CPF
// Mask convert Number to CPF format

export const formatDisplayCpf = (onlyNumbers) => {
  if (!onlyNumbers) {
    return onlyNumbers;
  }
  const first = onlyNumbers.substr(0, 3);
  const second = onlyNumbers.substr(3, 3);
  const third = onlyNumbers.substr(6, 3);
  const dv = onlyNumbers.substr(9);

  return `${first}.${second}.${third}-${dv}`;
  };
