import React from 'react'
import { Field, Formik, FormikValues } from 'formik'
import Grid from '@mui/material/Grid'
import '../styles/ComponentStyles/RegisterForm.css'
import Input from './Input';
import apiClient from '../config/axiosConfig';
import { toast } from 'react-toastify';
type RegisterFormProps = {
    className?: string
    initialValues?: any
}
export const standarValues = {
    "nome": '',
    "email": '',
    "nascimento": '',
    "telefone": '',
}
const RegisterForm = ({
    className,
    initialValues

}: RegisterFormProps) => {
    const valuesToVerify = ['nome', 'email', 'nascimento']
    const formatValues = (values:any) => {
        for(var obj of valuesToVerify){
            if(!values[obj] || values[obj] == ""){
                toast.error(`O campo ${obj} é obrigatorio.`)
                return false
            }
        }
        return {
            ...values,
            telefone: values['telefone'].replace( /[^0-9a-z]/gi, "" )
          };
    }
    const submitForm = (values:any) => {
        const data = formatValues(values)
        if(!data){
            return
        }
        apiClient.post(`cadastro/cadastros/create_cadastro`, 
        data)
        .then((res) => {
            toast.success("Cadastro concluído com sucesso")
        })
        .catch((err)=>{
            if(err.response.data){
                toast.error(err.response.data)
            }
            else{
                toast.error("Não foi possível concluir o cadastro")
                console.error(err)
            }

        })
    }
  
    return (
        <div className={className || "form-grid"}>
            <Formik
                initialValues={standarValues}
                onSubmit={(values: FormikValues) => submitForm(values)}
            >
                {({ handleChange, values }) => (
                    <Grid container spacing={2} className="form-grid">
                        <Grid item xs={12}>
                            <label htmlFor='nome' className="labels"> Nome:</label>
                            <Field
                                className="form-input"
                                variant="standard"
                                name="nome"
                                label="Nome"
                                id="nome"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <label htmlFor='nome' className="labels"> E-mail:</label>
                            <Field
                                className="form-input"
                                variant="standard"
                                name="email"
                                id="email"
                                label="E-mail"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <label htmlFor='nascimento' className="labels"> Nascimento:</label>
                            <Input
                                className="form-input"
                                mask="99/99/9999"
                                onChange={(e: any) => handleChange(e)}
                                name="nascimento"
                                id="nascimento"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <label htmlFor='telefone' className="labels"> Telefone:</label>
                            <Input
                                className="form-input"
                                mask="(99) 9 9999-9999"
                                name="telefone"
                                id="telefone"
                                onChange={(e: any) => handleChange(e)}
                            />
                        </Grid>
                        <div className="btn-div">
                            <button
                                onClick={() => submitForm(values)}
                                className="button-register"
                            >
                                Cadastrar
                            </button>
                        </div>
                    </Grid>
                )}

            </Formik>

        </div>
    )
}
export default RegisterForm