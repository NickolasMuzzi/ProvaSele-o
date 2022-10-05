import React from 'react';
import '../styles/ComponentStyles/AboutMe.css'
type AboutMeProps ={
    className?: string;
}

const AboutMe = ({className}: AboutMeProps) => {
    return(
        <div className={className || "about-me-container"} >
            <p>Nickolas Muzzi Vitoriano Soares</p>
            <p>nickolasmuzziv@gmail.com</p>
            <p>(31) 9 8401-7410</p>
            <p>Faculdade Newton Paiva - Sistemas de Informação</p>
        </div>
    )
}
export default AboutMe