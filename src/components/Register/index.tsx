/* eslint-disable react/no-this-in-sfc */
/* eslint-disable func-names */
import {
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import useTypesSelector from 'hooks/useTypesSelector';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { textTransform } from 'services/textTransform';
import { fetchUsersPositions } from 'store/actions/users';
import * as Yup from 'yup';

const Register = () => {
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState('');
  const [usersPositions, isLoaded] = useTypesSelector(({ users }) => [
    users.usersPositions,
    users.isLoaded,
  ]);

  const emailRegex =
    /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
  const phoneRegex = /^[\+]{0,1}380([0-9]{9})$/;

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      position_id: 1,
      photo: null,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Name must contain at least 2 characters')
        .max(60, 'Name cannot contain more than 60 characters')
        .required('Name is a required field'),
      email: Yup.string()
        .matches(emailRegex, 'Mail is not valid')
        .required('Mail is required field'),
      phone: Yup.string()
        .matches(phoneRegex, 'Phone number is not valid')
        .required('Number must start with +380'),
      photo: Yup.mixed()
        // .test(
        //   'MinimumSizeOfPhoto',
        //   'Minimum size of photo 70x70 pixels',
        //   (value) => {
        //     return new Promise((resolve) => {
        //       const reader = new FileReader();
        //       reader.readAsDataURL(value);
        //       reader.onload = function (value) {
        //         const img = new Image();
        //         img.src = value.target.result;
        //         img.onload = function () {
        //           console.log(this.width);
        //           console.log(this.height);
        //           resolve(!!(this.width >= 70 && this.height >= 70));
        //         };
        //       };
        //     });
        //   }
        // )
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
    }),
    onSubmit: (values) => {
      console.log(values);
      // const formData = new FormData();
      // formData.append('name', values.name);
      // formData.append('email', values.email);
      // formData.append('phone', values.phone);
      // formData.append('position_id', values.position_id);
      // formData.append('photo', values.photo, values.photo.name);
      // for (const [name, value] of formData) {
      //   console.log(`${name} = ${value}`);
      // }
    },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files) {
      const file = e.target.files[0];

      formik.setFieldTouched('photo', true);
      formik.setFieldValue('photo', file);

      const delFileExt = file.name.split('.')[0];
      setSelectedFile(delFileExt);
    }
  };

  useEffect(() => {
    dispatch(fetchUsersPositions());
  }, [dispatch]);

  return (
    <section className='page__register register'>
      <div className='register__container container'>
        <div className='register__top top-register'>
          <Typography
            variant='h1'
            component='h2'
            className='top-register__title h1'
          >
            {textTransform('Register to get a work', 22)}
          </Typography>
          <h3 className='top-users__subtitle h2'>
            {textTransform(
              'Your personal data is stored according to the Privacy Policy',
              60
            )}
          </h3>
        </div>
        <div className='register__body'>
          <form onSubmit={formik.handleSubmit} className='register__form form'>
            <fieldset className='form__input-fields'>
              <TextField
                label='Your name'
                name='name'
                variant='outlined'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                fullWidth
                required
              />
              <TextField
                label='Email'
                name='email'
                variant='outlined'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                fullWidth
                required
              />
              <TextField
                label='Phone'
                name='phone'
                variant='outlined'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
                fullWidth
                required
              />
            </fieldset>
            <div className='form__select-position'>
              <FormLabel id='users-position-labels'>
                Select your position
              </FormLabel>
              <RadioGroup
                aria-labelledby='users-position-labels'
                name='position_id'
                value={formik.values.position_id}
                onChange={formik.handleChange}
              >
                {usersPositions &&
                  usersPositions.map(({ id, name }) => (
                    <FormControlLabel
                      key={id}
                      value={id}
                      control={<Radio size='small' />}
                      label={name}
                    />
                  ))}
              </RadioGroup>
            </div>
            <div className='form__upload-photo photo-upload'>
              <div className='photo-upload__btn-wrapper'>
                <TextField
                  variant='outlined'
                  placeholder='Upload'
                  focused={false}
                  InputProps={{
                    readOnly: true,
                  }}
                  error={formik.touched.photo && Boolean(formik.errors.photo)}
                  helperText={formik.touched.photo && formik.errors.photo}
                />
                <input
                  className='photo-upload__input'
                  type='file'
                  name='photo'
                  accept='.jpeg, .jpg'
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <TextField
                variant='outlined'
                placeholder='Upload your photo'
                focused={false}
                InputProps={{
                  readOnly: true,
                }}
                classes={{ root: 'photo-upload__input-text' }}
                value={selectedFile}
                error={formik.touched.photo && Boolean(formik.errors.photo)}
                fullWidth
              />
            </div>
            <div className='form__sign-up'>
              <button
                disabled={!(formik.isValid && formik.dirty)}
                className='form__btn btn btn--yellow'
                type='submit'
              >
                <span>Sign up</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
