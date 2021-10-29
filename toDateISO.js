// Converte date (00/00/000) em dateISO (0000-00-00T00:00:00)
// Convert date (00/00/000) to dateISO (0000-00-00T00:00:00)

export const toDateISO = (value) => {
  const [dd, mm, yyyy] = value.split('/');

  const day = parseInt(dd, 10);
  const mon = parseInt(mm, 10);
  const year = parseInt(yyyy, 10);

  const date = new Date(year, mon - 1, day);

  return date.toISOString();
  };
