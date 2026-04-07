import './hero.scss';
import FadeInText from '../fadeintext/fadeintext';
import { motion } from 'motion/react';

export default function Hero() {
    return(
        <section className='hero'>
            <div className='hero__content'>
                <h2 className='hero__content-title'>
                    <FadeInText 
                        text={"Front-End Developer Junior React & UI"}
                    />
                </h2>
                <div className='hero__content-wrapper'>
                    <motion.p 
                        className='hero__content-text'
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true}} 
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt enim vero dolorem debitis ratione adipisci dolorum modi quis ducimus autem? Et minus consequuntur tenetur, impedit modi commodi veritatis magnam omnis.
                    </motion.p>
                    <motion.p 
                        className='hero__content-text'
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}    
                        viewport={{ once: true}} 
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt enim vero dolorem debitis ratione adipisci dolorum modi quis ducimus autem? Et minus consequuntur tenetur, impedit modi commodi veritatis magnam omnis.
                    </motion.p>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true}} 
                >
                    <a className='hero__content-link' href='#gallery'>[<span className='hero__content-link--hover'></span>Scroll or click to discover<span className='hero__content-link--hover'></span>]</a>
                </motion.div> 
            </div>
            <div className='hero__footer'>
                <motion.div 
                    className='hero__footer-border'
                    initial={{ width: 0 }}
                    animate={{width: "100%" }}
                    transition={{ duration: 1.2}}
                    viewport={{ once: true}} 
                >
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}   
                    className='hero__footer-social'
                    viewport={{ once: true}} 
                >
                    <a 
                        href='https://github.com/Flow2510' 
                        target='_blank' 
                        className='hero__footer-link'
                    >
                        <i className="fa-brands fa-square-github"></i>
                    </a>
                    <a
                        className='hero__footer-link'
                        href='https://www.linkedin.com/in/florian-sendra-3270961a1/' 
                        target='_blank' 
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="mailto:exemple@exemple.fr" target='__blank' className='hero__footer-link'>
                        <i className="fa-solid fa-envelope"></i>
                    </a>
                </motion.div>
                <div className='hero__footer-wrapper'>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}   
                        viewport={{ once: true}} 
                    >
                        2026
                    </motion.p>
                </div>
            </div>
        </section>
    )
}