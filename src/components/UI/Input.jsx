/* eslint-disable react/prop-types */
import { TextField } from '@mui/material';

const Input = ({ type = 'text',value,onChange, ...rest }) => {
  return <TextField type={type} value={value} onChange={onChange} {...rest} />;
};

export default Input;
