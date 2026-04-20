import { motion, useScroll, useTransform } from 'motion/react';
import './presentation.scss';
import FadeInText from '../fadeintext/fadeintext';
import List from '../list/list';
import { useRef } from 'react';

import photo from '../../assets/images/silhouette.webp'

export default function Presentation() {
    const stud = [
        "'Integrateur Web' OpenClassRooms [2026]", 
        "'HTML, CSS, JS' W3School [2025]", 
        "'Responsive Web Design Certification' FreeCodeCamp [2025]", 
    ];

    const comp = [
        "HTML, CSS, JS", 
        "React", 
        "SCSS", 
        "Animations (Framer Motion, GSAP)"
    ];

    const learn = [
        "Node.js",
        "Express",
        "MongoDb",
        "UI / UX Design",
        "Animations"
    ];

    const contact = [
        "sendra.florian@gmail.com", 
        "+336 21 15 67 13"
    ];

    const sectionRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: sectionRef,
        offset: ["start 30%", "end start"]
    })

    const xList = [
        useTransform(scrollYProgress, [0, 0.15, 0.35, 1], ["120%", "120%", "0%", "0%"]),
        useTransform(scrollYProgress, [0.05, 0.2, 0.4, 1], ["120%", "120%", "0%", "0%"]),
        useTransform(scrollYProgress, [0.1, 0.25, 0.45, 1], ["120%", "120%", "0%", "0%"]),
        useTransform(scrollYProgress, [0.15, 0.3, 0.5, 1], ["120%", "120%", "0%", "0%"]),
        useTransform(scrollYProgress, [0.2, 0.35, 0.55, 1], ["120%", "120%", "0%", "0%"]),
        useTransform(scrollYProgress, [0.25, 0.4, 0.6, 1], ["120%", "120%", "0%", "0%"])
    ];

    return(
        <section className='presentation'>
            <div className='presentation__image-wrapper'>
                <img className='presentation__image' src={photo} alt="" />
            </div>
            <div className='presentation__wrapper' ref={sectionRef}>
                <div className='presentation__content' >
                    <div className='presentation__content-container'>
                        <h2>
                            <FadeInText text={"Mon parcours"}/>
                        </h2>
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
                    <List title={'Parcours:'} items={stud} x={xList[0]}/>
                    <List title={'Stack:'} items={comp} x={xList[1]}/>
                    <List title={'Focus actuel:'} items={learn} x={xList[2]}/>
                    <motion.div className='presentation__content-wrapper' style={{ x: xList[3]}}>
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
                    </motion.div>
                    <motion.div className='presentation__content-wrapper' style={{ x: xList[4]}}>
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
                    </motion.div>
                    <List title={'Contact:'} items={contact} x={xList[5]}/>
                </div>
            </div>
        </section>
    )
}