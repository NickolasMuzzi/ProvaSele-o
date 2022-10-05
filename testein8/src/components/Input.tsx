import React, { useState } from 'react';
import { Field } from 'formik'
import InputMask from 'react-input-mask'
type InputProps = {
    className?: string;
    name?: string;
    value?: any
    type?: string
    placeholder?: string
    mask: string
    onChange?: any
    id?: string
}
const Input = ({
    className,
    name,
    value,
    type,
    placeholder,
    mask,
    onChange,
    id

}: InputProps) => {
    const [inputValue, setinputValue] = useState<any>()
    const changeInput = (e: any) => {
        setinputValue(e?.target?.value)
        return onChange(e)
    }
    return (
        <InputMask className={className}
         id={id}
         name={name}
         mask={mask}
         onChange={(e) => changeInput(e)}
         value={inputValue} />
    )
}

export default Input