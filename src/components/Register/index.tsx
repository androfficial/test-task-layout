import {
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import { textTransform } from 'services/textTransform';

const Register = () => {
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
          <form action='' className='register__form form' method='POST'>
            <div className='form__input-fields'>
              <TextField
                id='outlined-basic'
                label='Your name'
                variant='outlined'
                fullWidth
                classes={{ root: 'form__input' }}
              />
              <TextField
                id='outlined-basic'
                label='Email'
                variant='outlined'
                fullWidth
                classes={{ root: 'form__input' }}
              />
              <TextField
                id='outlined-basic'
                label='Phone'
                variant='outlined'
                fullWidth
                classes={{ root: 'form__input' }}
              />
            </div>
            <div className='form__select-position'>
              <FormLabel
                classes={{ root: 'form__radio-label' }}
                id='demo-radio-buttons-group-label'
              >
                Select your position
              </FormLabel>
              <RadioGroup
                aria-labelledby='demo-radio-buttons-group-label'
                defaultValue='Frontend developer'
                name='radio-buttons-group'
              >
                <FormControlLabel
                  classes={{ root: 'form__control-label' }}
                  value='Frontend developer'
                  control={<Radio size='small' />}
                  label='Frontend developer'
                />
                <FormControlLabel
                  classes={{ root: 'form__control-label' }}
                  value='Backend developer'
                  control={<Radio size='small' />}
                  label='Backend developer'
                />
                <FormControlLabel
                  classes={{ root: 'form__control-label' }}
                  value='Designer'
                  control={<Radio size='small' />}
                  label='Designer'
                />
                <FormControlLabel
                  classes={{ root: 'form__control-label' }}
                  value='QA'
                  control={<Radio size='small' />}
                  label='QA'
                />
              </RadioGroup>
            </div>
            <div className='form__upload-photo photo-upload'>
              <div className='photo-upload__btn-wrapper'>
                <button className='photo-upload__btn btn' type='button'>
                  <span>Upload</span>
                </button>
                <input
                  className='photo-upload__input'
                  type='file'
                  name='image'
                  accept='.jpg'
                />
              </div>
              <TextField
                id='outlined-basic'
                variant='outlined'
                placeholder='Upload your photo'
                classes={{ root: 'form__input form__input--file' }}
                InputProps={{
                  readOnly: true,
                }}
                fullWidth
              />
            </div>
            <div className='form__sign-up'>
              <button
                disabled
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
