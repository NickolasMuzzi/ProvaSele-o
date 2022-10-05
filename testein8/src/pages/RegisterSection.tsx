import React from 'react'
import RegisterForm from '../components/RegisterForm';
import '../styles/PageStyles/RegisterSection.css'

type RegisterSectionProps = {
    className?: string;
}
const RegisterSection = ({ className }: RegisterSectionProps) => {
   
    return (
        <div className='register-section-container'>
            <div className="form-container">
                <p>CADASTRO</p>
                <RegisterForm/>

            </div>
            
        </div>
    )
}

export default RegisterSection
   