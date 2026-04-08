import { NavLink } from 'react-router-dom';
import './cta.scss';
import FadeInText from '../fadeintext/fadeintext';
import { motion } from 'motion/react';

export default function Cta() {
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
                        Curieux de découvrir mon univers en front-end ? Explorez mon parcours, mes compétences et la manière dont je conçois mes projets avec React, SCSS et un design minimaliste.
                    </motion.p>
                    <motion.p 
                        className='cta__content-text'
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true}} 
                    >
                        De la création de portfolios aux sites vitrines, je partage ici mes réalisations récentes ainsi que les techniques et outils que j’ai utilisés pour les construire. Découvrez mon approche et laissez-vous guider à travers mon travail.
                    </motion.p>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true}} 
                >
                    <NavLink to='/' className='cta__content-link'>[<span className='cta__content-link--hover'></span>À propos<span className='cta__content-link--hover'></span>]</NavLink>
                </motion.div>
            </div>
        </section>
    )
}