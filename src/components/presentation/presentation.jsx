import { motion } from 'motion/react';
import './presentation.scss';
import FadeInText from '../fadeintext/fadeintext';
import List from '../list/list';

import profil from '../../assets/images/silhouette.webp'

export default function Presentation() {
    const stud = [
        "'Integrateur Web' OpenClassRooms [2026]", 
        "'HTML, CSS, JS' W3School [2025]", 
        "'Responsive Web Designe Certification' FreeCodeCamp [2025]", 
    ];

    const comp = [
        "HTML, CSS, JS", 
        "React", 
        "SCSS", 
        "Animations (Framer Motion, GSAP)"
    ];

    const learn = [
        "Next.js",
        "Supabase",
        "UI / UX Design",
        "Animations"
    ];

    const contact = [
        "sendra.florian@gmail.com", 
        "+336 21 15 67 13"
    ];

    return(
        <section className='presentation'>
            <h2>
                <FadeInText text={"À propos de moi"}/>
            </h2>
            <div className='presentation__wrapper'>
                <div className='presentation__container'>
                    <motion.div 
                        className='presentation__image-wrapper'
                    >
                        <motion.img 
                            className='presentation__image' 
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            src={profil}
                            alt="" 
                        />
                    </motion.div>
                </div>
                <div className='presentation__content'>
                    <div className='presentation__content-container'>
                        <motion.p 
                            className='presentation__content-text'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}  
                            viewport={{ once: true }}
                        >
                            Je suis un développeur front-end junior, passionné par la création d’interfaces simples et efficaces. Mon objectif est de construire des expériences web intuitives et accessibles.
                        </motion.p>
                        <motion.p 
                            className='presentation__content-text'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}  
                            viewport={{ once: true }}
                        >
                            Durant ma formation et mes projets, j’ai exploré différentes technologies comme React, SCSS et les animations interactives. J’aime travailler sur des sites responsives qui s’adaptent à tous les supports.
                        </motion.p>
                        <motion.p 
                            className='presentation__content-text'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}  
                            viewport={{ once: true }}
                        >
                            Je continue à perfectionner mes compétences et à tester de nouvelles idées pour améliorer mes projets. Chaque site que je crée est pour moi une occasion d’allier esthétique et performance.
                        </motion.p>
                    </div>
                    <List title={'Parcours:'} items={stud}/>
                    <List title={'Stack:'} items={comp}/>
                    <List title={'Focus actuel:'} items={learn}/>
                    <div className='presentation__content-wrapper'>
                        <motion.p 
                            className='presentation__content-subtitle'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }} 
                            viewport={{ once: true }}
                        >
                            Social:
                        </motion.p>
                        <ul className='presentation__list'>
                            <motion.li 
                                className='presentation__list-item'
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <a target='_blank' href="https://www.github.com">github <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </motion.li>
                            <motion.li 
                                className='presentation__list-item'
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <a target='_blank' href="https://www.linkedin.com">linkedin <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </motion.li>
                        </ul>
                    </div>
                    <div className='presentation__content-wrapper'>
                        <motion.p 
                            className='presentation__content-subtitle'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }} 
                            viewport={{ once: true }}
                        >
                            CV:
                        </motion.p>
                        <ul className='presentation__list'>
                            <motion.li 
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className='presentation__list-item'
                            >
                                <a target='_blank' href="/public/CV.pdf">Télécharger <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </motion.li>
                        </ul>
                    </div>
                    <List title={'Contact:'} items={contact}/>
                </div>
            </div>
        </section>
    )
}