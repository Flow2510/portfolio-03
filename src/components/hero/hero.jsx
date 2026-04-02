import { NavLink } from 'react-router-dom';
import './hero.scss';
import FadeInText from '../fadeintext/fadeintext';
import { motion } from 'motion/react';

export default function Hero() {
    return(
        <section className='hero'>
            <div className='hero__content'>
                <h2 className='hero__content-title'>
                    <FadeInText 
                        text={"Hero title"}
                    />
                </h2>
                <div className='hero__content-wrapper'>
                    <motion.p 
                        className='hero__content-text'
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt enim vero dolorem debitis ratione adipisci dolorum modi quis ducimus autem? Et minus consequuntur tenetur, impedit modi commodi veritatis magnam omnis.
                    </motion.p>
                    <motion.p 
                        className='hero__content-text'
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}    
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt enim vero dolorem debitis ratione adipisci dolorum modi quis ducimus autem? Et minus consequuntur tenetur, impedit modi commodi veritatis magnam omnis.
                    </motion.p>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <NavLink className='hero__content-link' to={'/'}>[<span className='hero__content-link--hover'></span>Link Text<span className='hero__content-link--hover'></span>]</NavLink>
                </motion.div> 
            </div>
            <div className='hero__footer'>
                <motion.div 
                    className='hero__footer-border'
                    initial={{ width: 0 }}
                    animate={{width: "100%" }}
                    transition={{ duration: 1.2}}
                >
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}   
                    className='hero__footer-social'
                >
                    <NavLink className='hero__footer-link'>Github</NavLink>
                    <NavLink className='hero__footer-link'>Linkedin</NavLink>
                    <NavLink className='hero__footer-link'>Email</NavLink>
                </motion.div>
                <div className='hero__footer-wrapper'>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}   
                    >
                        2026
                    </motion.p>
                </div>
            </div>
        </section>
    )
}