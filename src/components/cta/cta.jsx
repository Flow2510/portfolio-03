import { NavLink } from 'react-router-dom';
import './cta.scss';
import FadeInText from '../fadeintext/fadeintext';
import { motion } from 'motion/react';
import AnimatedText from '../animatedtext/animatedtext';

export default function Cta({ to }) {
    return(
        <section className='cta'>
            <div className='cta__content'>
                <h3 className='cta__content-title'>
                    <FadeInText text={'Découvrez mon parcours'}/>
                </h3>
                <div className='cta__content-wrapper'>                 
                    <motion.p 
                        className='cta__content-text'
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true}} 
                    >
                        <AnimatedText 
                            text={'Comment je conçois des interfaces web modernes avec React, SCSS et une approche centrée sur la simplicité et l’efficacité.'}
                            transitionColor={"#fafafa80"}
                            finalColor={"#fafafa"}
                        />
                    </motion.p>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true}} 
                >
                    <NavLink to={to} className='cta__content-link'>[<span className='cta__content-link--hover'></span>En savoir plus<span className='cta__content-link--hover'></span>]</NavLink>
                </motion.div>
            </div>
        </section>
    )
}