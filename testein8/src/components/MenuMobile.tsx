import React, { useState } from 'react';
import '../styles/ComponentStyles/MenuMobile.css'
import closedHamb from '../icons/hamburguer.svg'
import openHamb from '../icons/hamburguer-aberto0.svg'
import logo from '../images/logo-in8-dev.svg'
import Backdrop from '@mui/material/Backdrop';
import {scrollToList, scrollToRegister, scrollToAbout} from '../utils/ScrollFunctions'
type MenuMobileProps = {
    className?: string
}

const MenuMobile = ({ className }: MenuMobileProps) => {
    const [open, setMenuOpen] = useState(false)
    const redirectTo = (screenPlace:string) =>{
        setMenuOpen(false)
        switch (screenPlace){
            case 'register':{
                return scrollToRegister()
            }
            case 'list':{
                return scrollToList()
            }
            case 'about':{
                return scrollToAbout()
            }
        }
    }
    if (open) {
        return (
            <div className={className ||"header-menu"}>
                <img alt="IN8 Dev" src={logo} className="logo-open-menu" />
                <Backdrop open={open} sx={{ backgroundColor: '#ffffff53'}}/>
                <div className="menu-open">
                    <div className="close-menu">
                        <img alt="Fechar" src={openHamb} onClick={() => setMenuOpen(false)} className="closed-hamb" />
                    </div>
               
                    <div className="menu-list">
                            <p onClick={() => redirectTo('register')} className="menu-item">Cadastro</p>
                            <p onClick={() => redirectTo('list')} className="menu-item">Lista</p>
                            <p onClick={() => redirectTo('about')} className="menu-item">Sobre Mim</p>
                    </div>
                </div>
            </div>

        )

    }
    else {
        return (
            <div className={className || "closed-menu"} >
                <img alt="Menu" src={closedHamb} onClick={() => setMenuOpen(true)} className="closed-hamb" />
                <img alt="IN8 Dev" src={logo} className="logo" />
            </div>
        )
    }


}
export default MenuMobile