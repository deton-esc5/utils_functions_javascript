// Máscara para deixar números em formato monetário (BRL-"R$")
// Máscara convert number to money (BRL-"R$")

export const formatMoney = (value) => {
  let valor = value;
  valor = valor.toString();
  const caracteres = valor.length;

  if (caracteres <= 3) {
    valor = parseFloat(valor);
    valor += '00';
    valor = parseFloat(valor.replace(/[\D]+/g, ''));
    valor += '00';
    valor = valor.replace(/([0-9]{2})$/g, ',$1');
  } if (caracteres >= 4) {
    valor = parseFloat(valor);
    valor += '0';
    valor = parseFloat(valor.replace(/[\D]+/g, ''));
    valor += '0';
    valor = valor.replace(/([0-9]{2})$/g, ',$1');
  } else {
    valor = parseInt(valor);
    valor += '';
    valor = parseInt(valor.replace(/[\D]+/g, ''));
    valor += '';
    valor = valor.replace(/([0-9]{2})$/g, ',$1');
  }
  if (valor.length > 6) {
    valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2');
    return valor;
  }
  if (valor === 'NaN') {
    valor = '';
  }
  return valor;
  };
