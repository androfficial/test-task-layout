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
          <form action='' className='register__form form'>
            <div className='form__input-fields'>
              <TextField
                id='outlined-basic'
                label='Your name'
                variant='outlined'
                fullWidth
              />
              <TextField
                id='outlined-basic'
                label='Email'
                variant='outlined'
                fullWidth
              />
              <TextField
                id='outlined-basic'
                label='Phone'
                variant='outlined'
                fullWidth
              />
            </div>
            <div className='form__select-position'>
              <FormLabel id='demo-radio-buttons-group-label'>
                Select your position
              </FormLabel>
              <RadioGroup
                aria-labelledby='demo-radio-buttons-group-label'
                defaultValue='Frontend developer'
                name='radio-buttons-group'
              >
                <FormControlLabel
                  value='Frontend developer'
                  control={<Radio />}
                  label='Frontend developer'
                />
                <FormControlLabel
                  value='Backend developer'
                  control={<Radio />}
                  label='Backend developer'
                />
                <FormControlLabel
                  value='Designer'
                  control={<Radio />}
                  label='Designer'
                />
                <FormControlLabel value='QA' control={<Radio />} label='QA' />
              </RadioGroup>
            </div>
            <div className='form__upload-photo' />
            <div className='form__sign-up'>
              <button
                disabled
                className='form__btn btn btn--yellow'
                type='button'
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
