import React from 'react'
import logo from '../images/logo-in8-dev.svg'
import CircleIcon from '@mui/icons-material/Circle';
import '../styles/ComponentStyles/Header.css'
import {scrollToHome, scrollToRegister, scrollToList, scrollToAbout} from '../utils/ScrollFunctions'
type HeaderProps = {
    className?: string;
}
const Header = ({ className }: HeaderProps) => {

    return (
        <div className='header-container' id="header">
            <img className="logo" src={logo} alt="logo" onClick={() => scrollToHome()} />
            <div className="links">
                <button className="btn-header" onClick={() => scrollToRegister()}>cadastro</button>
                <CircleIcon className="icons"/>
                <button className="btn-header" onClick={() => scrollToList()}>lista</button>
                <CircleIcon className="icons"/>
                <button className="btn-header" onClick={() => scrollToAbout()}>sobre mim</button>
            </div>
            
        </div>
    )
}

export default Header
   