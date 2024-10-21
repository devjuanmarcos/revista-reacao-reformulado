export const formatDate = (date: string): string => {
  const parts = date.split("-");
  if (parts.length === 3) {
    const [year, month, day] = parts;
    return `${year}-${month}-${day}`;
  } else {
    console.error("Formato de data inválido:", date);
    return date;
  }
};
