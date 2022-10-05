import TextField, { TextFieldProps } from '@mui/material/TextField';
import React from 'react'
import { useIMask } from 'react-imask';

export type InputMaskProps = TextFieldProps & {
    mask: string;
    required?: any;
  };
  
  const InputMask = ({ mask, ...props }: InputMaskProps) => {
    const { ref } = useIMask({ mask });
  
    return <TextField {...props} inputProps={{ ref: ref }} />;
  };
  
  export default InputMask;