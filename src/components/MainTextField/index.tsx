import styled from '@emotion/styled';
import { TextField, TextFieldProps } from '@mui/material';

const MainTextField = (props: TextFieldProps) => {
  const CustomTextField = styled((props: TextFieldProps) => (
    <TextField {...props} />
  ))({
    '& .MuiFormHelperText-root.Mui-error': {
      fontFamily: ['Asap', 'sans-serif'].join(','),
      color: '#cb3d40',
      letterSpacing: 'normal',
      margin: '4px 15px 0px 15px',
    },
    '& .MuiInputLabel-root': {
      fontFamily: ['Asap', 'sans-serif'].join(','),
      color: '#7e7e7e',
      letterSpacing: 'normal',
      '&.Mui-focused': {
        color: '#00bdd3',
      },
      '&.Mui-error': {
        color: '#cb3d40',
      },
      '&.Mui-disabled': {
        color: '#bcbcbc',
      },
    },
    '& .MuiOutlinedInput-root': {
      fontFamily: ['Asap', 'sans-serif'].join(','),
      fontWeight: 400,
      fontSize: 16,
      letterSpacing: 'normal',
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#00bdd3',
      },
      '&.Mui-error .MuiOutlinedInput-notchedOutline': {
        borderColor: '#cb3d40',
        borderWidth: 2,
      },
      '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
        borderColor: '#bcbcbc',
      },
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#d0cfcf',
    },
    '& .MuiOutlinedInput-input': {
      padding: '15.5px 16px',
    },
  });

  return <CustomTextField {...props} />;
};

export default MainTextField;
