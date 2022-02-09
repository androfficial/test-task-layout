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
import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { textTransform } from '../../helpers/textTransform';
import { userAddingScheme } from '../../helpers/validationSchemes/userAddingScheme';
import useTypesSelector from '../../hooks/useTypesSelector';
import {
  fetchUser,
  fetchUserPositions,
  setIsUserRegistered,
} from '../../store/actions/users';
import { FormValues } from '../../types/formik';

const Register = () => {
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState('');
  const [userPositions, isUserRegistered, isLoaded] = useTypesSelector(
    ({ users }) => [users.userPositions, users.isUserRegistered, users.isLoaded]
  );

  const formik = useFormik<FormValues>({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      position_id: 1,
      photo: null,
    },
    validationSchema: userAddingScheme,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      const formData = new FormData();

      // eslint-disable-next-line no-restricted-syntax
      for (const [key, value] of Object.entries(values)) {
        formData.append(key, value);
      }

      resetForm();
      setSelectedFile('');
      if (isUserRegistered) {
        dispatch(setIsUserRegistered(false));
      }
      dispatch(fetchUser(formData));
    },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files?.length) {
      const file = e.target.files[0];

      formik.setFieldValue('photo', file);

      const delFileExt = file.name.split('.')[0];
      setSelectedFile(delFileExt);
    }
  };

  useEffect(() => {
    dispatch(fetchUserPositions());
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
                disabled={!isLoaded}
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
                disabled={!isLoaded}
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
                disabled={!isLoaded}
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
                {userPositions &&
                  userPositions.map(({ id, name }) => (
                    <FormControlLabel
                      key={id}
                      value={id}
                      control={<Radio disabled={!isLoaded} size='small' />}
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
                  disabled={!isLoaded}
                />
                <input
                  className='photo-upload__input'
                  type='file'
                  name='photo'
                  accept='.jpeg, .jpg'
                  onChange={(e) => handleChange(e)}
                  onBlur={formik.handleBlur}
                  disabled={!isLoaded}
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
                disabled={!isLoaded}
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
