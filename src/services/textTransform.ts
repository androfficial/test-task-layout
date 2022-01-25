export const textTransform = (text: string, number = 40): string =>
  text.length > number ? `${text.slice(0, number)}...` : text;
