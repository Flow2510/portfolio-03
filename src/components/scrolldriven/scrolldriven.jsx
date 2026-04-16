import { useRef, useState } from 'react';
import './scrolldriven.scss';
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from 'motion/react';
import FadeInText from '../fadeintext/fadeintext';

import fork from '../../assets/images/fork.gif'
import animation from '../../assets/images/animation2.gif'
import column from '../../assets/images/column.gif'
import computer from '../../assets/images/computer.gif'

export default function ScrollDriven() {
    const data = [
        {
            title: "Interfaces modernes",
            icon: column,
            text: "Je conçois des interfaces claires et actuelles, en mettant l’accent sur la lisibilité et la hiérarchie visuelle. L’objectif est de proposer une expérience agréable, où l’utilisateur comprend rapidement où aller et comment interagir.",
            alt: "Icone d'un ordinateur representant une interface moderne sur écran large",
            animation: "A"
        },
        {
            title: "Sites responsives",
            icon: computer,
            text: "Chaque interface est pensée pour s’adapter naturellement à tous les formats. Du mobile au desktop, je veille à conserver une navigation fluide, cohérente et confortable, sans perte d’information ni de qualité visuelle.",
            alt: "Icone d'une grille qui bouge represantant une interface qui change selon les écrans",
            animation: "B"
        },
        {
            title: "Animations fluides",
            icon: animation,
            text: "Les animations accompagnent la navigation et apportent du rythme à l’interface. Je les utilise pour guider l’utilisateur, rendre les interactions plus naturelles et renforcer la sensation de fluidité.",
            alt: "Trois cercles a la suite representant des animations",
            animation: "C"
        },
        {
            title: "Code structuré",
            icon: fork,
            text: "Je développe des bases solides et organisées, en privilégiant des composants réutilisables et une structure claire. Cela permet de faire évoluer les projets facilement tout en gardant un code lisible et maintenable.",
            alt: "icone d'un fork representant la structure du code",
            animation: "D"
        }
    ];
    const [visible, setVisible] = useState(true)

    const ref = useRef(null)
    const sectionRef = useRef(null)

    const { scrollYProgress: progressA } = useScroll({
        target: sectionRef,
        offset:["start start", "end end"]
    })

    const { scrollYProgress: progressB } = useScroll({
        target: sectionRef,
        offset:["start start", "end center"]
    })

    const width = useTransform(progressA, [0, 1], ["0%", "100%"])
    const height = [
        useTransform(progressB, [0, 0.15, 0.3, 0.45], [150, 150, 0, 0]),
        useTransform(progressB, [0.15, 0.3, 0.45, 0.6], [0, 150, 150, 0]),
        useTransform(progressB, [0.45, 0.6, 0.7, 0.8], [0, 150, 150, 0]),
        useTransform(progressB, [0.7, 0.8, 0.9, 0.9], [0, 150, 150, 150])
    ];
    
    useMotionValueEvent(progressA, "change", (latest) => {
        if (latest >= 1) {
            setTimeout(() => setVisible(false), 400)
        } else {
            setVisible(true);
        }
    });

    return(
        <section className='scroll-driven'>
            <div className='scroll-driven__container' ref={sectionRef}>
                <AnimatePresence>
                    {visible && (
                        <motion.div 
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            className='scroll-driven__progression'
                        >
                            <div className='scroll-driven__progression-wrapper'>
                                <motion.div className='scroll-driven__progression-bar' style={{ width }}></motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                <div 
                    className='scroll-driven__wrapper' 
                    ref={ref} 
                >
                    <div className='scroll-driven__content'>
                        <h2>
                            <FadeInText 
                                text={"Des interfaces modernes, fluides et intuitives."}
                            />
                        </h2>
                    </div>
                    <div className='scroll-driven__accordeons'>
                        {data.map((d, index) => (
                            <div 
                                key={d.title + index}
                                className='accordeon'
                            >
                                <div className='accordeon__icon-wrapper'>
                                    <img className='accordeon__icon' src={d.icon} alt={d.alt} />
                                </div>
                                <div className='accordeon__content'>
                                    <motion.p className='accordeon__content-text' style={{ height: height[index]}}>{d.text}</motion.p>
                                    <h3 className='accordeon__content-button'>{d.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>        
        </section>
    )
}