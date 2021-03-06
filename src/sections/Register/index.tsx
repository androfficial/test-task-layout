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

import { NetworkFormErrors, Preloader } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { userRegisterScheme } from '../../schemes/userRegisterScheme';
import {
  fetchUserPositions,
  newUserRegister,
} from '../../store/slices/usersSlice';

interface IFormValues {
  name: string;
  email: string;
  phone: string;
  position_id: number;
  photo: File | null;
}

export const Register = () => {
  const dispatch = useAppDispatch();
  const [selectedFile, setSelectedFile] = useState('');
  const [userPositions, isUserRegistered, isSubmitting, formErrors] =
    useAppSelector(({ users }) => [
      users.userPositions,
      users.isUserRegistered,
      users.isSubmitting,
      users.formErrors,
    ]);

  const formik = useFormik<IFormValues>({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      position_id: 1,
      photo: null,
    },
    validationSchema: userRegisterScheme,
    onSubmit: (values) => {
      const formData = new FormData();

      // eslint-disable-next-line no-restricted-syntax
      for (const [key, value] of Object.entries(values)) {
        formData.append(key, value);
      }

      dispatch(newUserRegister({ userData: formData }));
    },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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

  useEffect(() => {
    if (isUserRegistered) {
      formik.resetForm();
      setSelectedFile('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUserRegistered]);

  return (
    <section className='page__register register' id='sign-up'>
      <div className='register__container container'>
        <div className='register__top top-register'>
          <Typography
            variant='h1'
            component='h2'
            className='top-register__title h1'
          >
            Working with POST request
          </Typography>
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                      control={<Radio disabled={isSubmitting} size='small' />}
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
                  disabled={isSubmitting}
                />
                <input
                  className='photo-upload__input'
                  type='file'
                  name='photo'
                  accept='.jpeg, .jpg'
                  onChange={handleChange}
                  onBlur={formik.handleBlur}
                  disabled={isSubmitting}
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
                disabled={isSubmitting}
                fullWidth
              />
            </div>
            {/* ???????? ?????????? ???? ???????????????????????? ???????????? ?? ???????????????? ???????????? ?????????????????????? ???????????????????????? ???? ???????????????????? ?????????????????? ???????????? */}
            {!isSubmitting && !formErrors.success && (
              <NetworkFormErrors formErrors={formErrors} />
            )}
            <div className='form__sign-up'>
              {isSubmitting ? (
                <Preloader addClass='form__preloader' />
              ) : (
                <button
                  disabled={!(formik.isValid && formik.dirty)}
                  className='form__btn btn btn--yellow'
                  type='submit'
                >
                  <span>Sign up</span>
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
