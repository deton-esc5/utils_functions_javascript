// Função para deixar somente números e retirar qualquer outro caractér
// Function to leave only numbers and remove any other characters

export const takeMask = (value) => {
  if (value) {
    const result = value.replace(/ /g, '').replace(/[^0-9]/g, '');
    return result;
  }
  return value;
  };
  