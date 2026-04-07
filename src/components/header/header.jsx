import { NavLink } from 'react-router-dom';
import './header.scss';
import { useState } from 'react';
import { motion } from 'motion/react';
import FadeInText from '../fadeintext/fadeintext';

export default function Header() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return(
        <div className='header__wrapper'>
            <header className='header'>
                <NavLink to={'/'} className='header__logo'>
                    <h1 
                        className='header__logo-title'
                    >
                        <FadeInText text={"LOGO"}/>
                    </h1>
                </NavLink>
                <motion.nav 
                    className='header__menu'
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}   
                >
                    <NavLink className='header__menu-link' to={'/'}><span className='header__menu-link--hover'>[</span>Accueil<span className='header__menu-link--hover'>]</span></NavLink>
                    <NavLink className='header__menu-link' to={'/projects'}><span className='header__menu-link--hover'>[</span>Projets<span className='header__menu-link--hover'>]</span></NavLink>
                    <NavLink className='header__menu-link' to={'/about'}><span className='header__menu-link--hover'>[</span>About<span className='header__menu-link--hover'>]</span></NavLink>
                </motion.nav>
                <button 
                    onClick={() => setMenuIsOpen(prev => !prev)}
                    className='header__button'
                >
                    <span className='header__button--left'></span>Menu<span className='header__button--right'></span>
                </button>
                <motion.div 
                    className='header__border'
                    initial={{ width: 0 }}
                    animate={{width: "100%" }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                >
                </motion.div>
            </header>
            <div className={`mobile-header${menuIsOpen ?  " mobile-header--open" : ""}`}>
                <nav className='mobile-header__menu'>
                    <NavLink className='mobile-header__menu-link' to={'/'} onClick={() => menuIsOpen(prev => !prev)}>Accueil</NavLink>
                    <NavLink className='mobile-header__menu-link' to={'/projects'} onClick={() => menuIsOpen(prev => !prev)}>Projets</NavLink>
                    <NavLink className='mobile-header__menu-link' to={'/about'} onClick={() => menuIsOpen(prev => !prev)}>About</NavLink>
                </nav>
            </div>
            
        </div>
    )
}