import React from 'react'
import '../styles/PageStyles/FirstSection.css'
type FirstSectionProps = {
    className?: string;
}

const FirstSection = ({ className}:FirstSectionProps) =>{
    return(
        <div className="first-section-container">

            <div className="text-container">
               
            <p className="title1">ESTÁGIO </p>
            <p className="title2">PROVA DE SELEÇÃO</p>
            </div>

        </div>
    )
}
export default FirstSection