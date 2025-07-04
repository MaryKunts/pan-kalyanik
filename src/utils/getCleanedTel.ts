export const getTelLink = (tel: string) => {
  return `tel:${tel.replace(/\D/g, "")}`;
};
