import { NavLink } from 'react-router-dom';
import './header.scss';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import SocialIcon from '../socialicon/socialicon';

import git from '../../assets/images/git.png'
import gitAnimated from '../../assets/images/gitanimated.gif'
import linkedin from '../../assets/images/linkedin.png'
import linkedinAnimated from '../../assets/images/linkedinanimated.gif'
import mail from '../../assets/images/mail.png'
import mailAnimated from '../../assets/images/mailanimated.gif'
import RevealLink from '../reveallink/reveallink';

export default function Header() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return(
        <>
            <header className='header'>
                <div className='header__wrapper'>
                    <NavLink to={'/'} className='header__logo'>
                        <h1 
                            className='header__logo-title'
                        >
                            Florian Sendra ©
                        </h1>
                    </NavLink>
                    
                    <motion.button 
                        aria-label='Ouverture du menu'
                        onClick={() => setMenuIsOpen(prev => !prev)}
                        initial={{ x: 20, opacity: 0}}
                        animate={{ x: 0, opacity: 1}}
                        transition={{ duration: 0.5}}
                        className='header__button'
                    >
                        <i className="fa-solid fa-bars"></i>
                    </motion.button>
                </div>
            </header>
            <AnimatePresence>
                {menuIsOpen &&
                    <motion.div 
                        className='header__menu'
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                    >
                        <div to={'/'} className='header__menu-logo'>
                            <h1 
                                className='header__menu-title'
                            >
                                Florian Sendra ©
                            </h1>
                        </div>
                        <motion.button 
                            aria-label='Fermeture du menu'
                            className='header__menu-close' 
                            onClick={() => setMenuIsOpen(prev => !prev)}
                        >
                            <i className="fa-solid fa-bars-staggered"></i>
                        </motion.button>
                        <nav className='header__nav'>
                            <NavLink 
                                className='header__nav-link' 
                                onClick={() => setMenuIsOpen(prev => !prev)} 
                                to={'/'}
                            >
                                <RevealLink 
                                    text={"Accueil"}
                                />
                            </NavLink>
                            <NavLink 
                                className='header__nav-link'
                                onClick={() => setMenuIsOpen(prev => !prev)}
                                to={'/projects'}
                            >
                                <RevealLink 
                                    text={"Projets"}
                                />                                    
                            </NavLink>
                            <NavLink 
                                className='header__nav-link' 
                                onClick={() => setMenuIsOpen(prev => !prev)} 
                                to={'/about'}
                            >
                                <RevealLink 
                                    text={"Infos"}
                                /> 
                            </NavLink>
                        </nav>
                        <div className='header__social'>
                            <SocialIcon 
                                icon={git}
                                iconAnimated={gitAnimated}
                                aria={"Voir mon profil GitHub (ouvre dans un nouvel onglet)"}
                                href={"https://github.com/Flow2510"}
                                filter={true}
                            />
                            <SocialIcon 
                                icon={linkedin}
                                iconAnimated={linkedinAnimated}
                                aria={"Voir mon profil LinkedIn (ouvre dans un nouvel onglet)"}
                                href={"https://www.linkedin.com/in/florian-sendra-3270961a1/"}
                                filter={true}
                            />
                            <SocialIcon 
                                icon={mail}
                                iconAnimated={mailAnimated}
                                aria={"M’envoyer un email (ouvre dans un nouvel onglet)"}
                                href={"mailto:sendra.florian@gmail.com"}
                                filter={true}
                            />
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </>
    )
}