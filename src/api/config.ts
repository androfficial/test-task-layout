import axios, { AxiosError } from 'axios';

export const handleError = (error: unknown | AxiosError) => {
  if (axios.isAxiosError(error)) {
    console.error(error.response?.data);

    return {
      success: error.response?.data.success as boolean,
      data: error.response?.data,
    };
  }

  console.error(error);
  return {
    success: false,
    data: error,
  };
};
