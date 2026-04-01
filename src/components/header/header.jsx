import { NavLink } from 'react-router-dom';
import './header.scss';
import { useState } from 'react';

export default function Header() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return(
        <div className='header__wrapper'>
            <header className='header'>
                <NavLink to={'/'} className='header__logo'>
                    <h1 className='header__logo-title'>LOGO</h1>
                </NavLink>
                <nav className='header__menu'>
                    <NavLink className='header__menu-link' to={'/'}>Accueil</NavLink>
                    <NavLink className='header__menu-link' to={'/projects'}>Projets</NavLink>
                    <NavLink className='header__menu-link' to={'/about'}>About</NavLink>
                </nav>
                <button 
                    onClick={() => setMenuIsOpen(prev => !prev)}
                    className='header__button'
                >
                    <span className='header__button--left'></span>Menu<span className='header__button--right'></span>
                </button>
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