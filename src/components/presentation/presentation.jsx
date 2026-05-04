import { motion, useScroll, useTransform } from 'motion/react';
import './presentation.scss';
import List from '../list/list';
import { useRef } from 'react';

import photo from '../../assets/images/silhouette.webp'
import MaskReveal from '../maskreveal/maskreveal';

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
            <motion.div 
                initial={{ width: "0%"}}
                animate={{ width: "100%"}}
                transition={{ duration: 0.5}}
                className='presentation__image-wrapper'
            >
                <img className='presentation__image' src={photo} alt="" />
            </motion.div>
            <div className='presentation__wrapper' ref={sectionRef}>
                <div className='presentation__content' >
                    <div className='presentation__content-container'>
                        <h2>
                            <MaskReveal 
                                text={"Mon parcours"}
                                backgroundColor={"#121212"}
                                animated={true}
                                inView={false}
                                delay={0.2}
                            />
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
                    <List delay={0.1} animated={true} inView={false} title={'Parcours:'} items={stud}/>
                    <List delay={0.2} animated={true} inView={false} title={'Stack:'} items={comp} />
                    <List delay={0.3} animated={true} inView={false} title={'Focus actuel:'} items={learn}/>
                    <motion.div className='presentation__content-wrapper' >
                        <motion.p 
                            className='presentation__content-subtitle'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }} 
                            viewport={{ once: true }}
                        >
                            
                            <MaskReveal 
                                text={"Social:"}
                                backgroundColor={"#121212"}
                                animated={false}
                                inView={true}
                                delay={0.2}
                            />
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
                    <motion.div className='presentation__content-wrapper'>
                        <motion.p 
                            className='presentation__content-subtitle'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }} 
                            viewport={{ once: true }}
                        >
                            
                            <MaskReveal 
                                text={"CV:"}
                                backgroundColor={"#121212"}
                                animated={false}
                                inView={true}
                                delay={0}
                            />
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
                    <List delay={0} animated={false} inView={true} title={'Contact:'} items={contact}/>
                </div>
            </div>
        </section>
    )
}