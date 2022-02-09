export const formatPhone = (phone: string): string => {
  if (phone.length !== 13) return phone;
  const fPhone = phone.split('');
  fPhone.splice(3, 0, ' (');
  fPhone.splice(7, 0, ') ');
  fPhone.splice(11, 0, ' ');
  fPhone.splice(14, 0, ' ');
  return fPhone.join('');
};
