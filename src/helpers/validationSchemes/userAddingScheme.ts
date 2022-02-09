import * as Yup from 'yup';

import * as regex from '../regex';

export const userAddingScheme = Yup.object({
  name: Yup.string()
    .min(2, 'Name must contain at least 2 characters')
    .max(60, 'Name cannot contain more than 60 characters')
    .required('Name is a required field'),
  email: Yup.string()
    .matches(regex.emailRegex, 'Mail is not valid')
    .required('Mail is required field'),
  phone: Yup.string()
    .matches(regex.phoneRegex, 'Phone number is not valid')
    .required('Number must start with +380'),
  photo: Yup.mixed()
    .required('Image required')
    .test(
      'MinimumSizeOfPhoto',
      'Minimum size of photo 70x70 pixels',
      (value) => {
        if (!value) return false;
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.readAsDataURL(value);
          reader.onload = function (value) {
            const img = new Image();
            img.src = value?.target?.result as string;
            img.onload = () => {
              resolve(!!(img.width >= 70 && img.height >= 70));
            };
          };
        });
      }
    )
    .test(
      'type',
      'Only the following formats are accepted: jpeg/jpg',
      (value) => value && ['image/jpeg', 'image/jpg'].includes(value.type)
    )
    .test(
      'fileSize',
      'File size must not exceed 5 MB',
      (value) => value && value.size <= 5 * 1024 * 1024
    ),
});
