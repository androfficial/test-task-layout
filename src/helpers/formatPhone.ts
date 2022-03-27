export const formatPhone = (phone: string): string => {
  if (phone.length === 13) {
    const fPhone = phone.split('');
    fPhone.splice(3, 0, ' (');
    fPhone.splice(7, 0, ') ');
    fPhone.splice(11, 0, ' ');
    fPhone.splice(14, 0, ' ');
    return fPhone.join('');
  }
  if (phone.length === 12) {
    const fPhone = phone.split('');
    fPhone.splice(2, 0, ' (');
    fPhone.splice(6, 0, ') ');
    fPhone.splice(10, 0, ' ');
    fPhone.splice(13, 0, ' ');
    return fPhone.join('');
  }

  return phone;
};
