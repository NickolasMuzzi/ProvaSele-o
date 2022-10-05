import React from 'react';
import '../styles/ComponentStyles/AboutMe.css'
type AboutMeProps ={
    className?: string;
}

const AboutMe = ({className}: AboutMeProps) => {
    return(
        <div className={className || "about-me-container"} >
            <p className="row-data">Nickolas Muzzi Vitoriano Soares</p>
            <p className="row-data">nickolasmuzziv@gmail.com</p>
            <p className="row-data">(31) 9 8401-7410</p>
            <p className="row-data">Faculdade Newton Paiva - Sistemas de Informação</p>
        </div>
    )
}
export default AboutMe