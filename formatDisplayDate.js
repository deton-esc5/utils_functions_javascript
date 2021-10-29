// Converte dateISO (0000-00-00T00:00:00) em date (00/00/000)
// Convert dateISO (0000-00-00T00:00:00) to date (00/00/000)

export const formatDisplayDate = (isoDate) => {
  if (!isoDate) {
    return isoDate;
  }
  const [yyyy, mm, dd] = isoDate.split('T')[0].split('-');
  return `${dd}/${mm}/${yyyy}`;
};
  