// Máscara para converter formato monetário (BRL-"R$") em números
// Máscara convert money (BRL-"R$") in money

export const converteMoneyToFloat = (value) => {
  let number = value;
  if (number === '') {
    number = 0;
  } else {
    number = number.replace('R$', '');
    number = number.replace('.', '');
    number = number.replace(',', '.');
    number = parseFloat(number);
  }
  return number;
  };
  