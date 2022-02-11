import axios, { AxiosError } from 'axios';

export const handleError = (error: unknown | AxiosError): false => {
  if (axios.isAxiosError(error)) {
    console.error(error.response);
    return false;
    // return {
    //   success: error.response?.data.success as boolean,
    //   message: error.response?.data.message as string,
    //   fails: error.response?.data.fails ? error.response.data.fails : {},
    // };
  }
  console.error(error);
  return false;
  // return {
  //   success: false,
  //   message: error,
  //   fails: {},
  // };
};
