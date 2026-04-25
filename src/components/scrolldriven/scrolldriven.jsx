import { useRef, useState } from 'react';
import './scrolldriven.scss';
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from 'motion/react';
import FadeInText from '../fadeintext/fadeintext';

import forkAnimated from '../../assets/images/fork.gif'
import animationAnimated from '../../assets/images/animation2.gif'
import columnAnimated from '../../assets/images/column.gif'
import computerAnimated from '../../assets/images/computer.gif'

import fork from '../../assets/images/fork.png'
import animation from '../../assets/images/animation2.png'
import column from '../../assets/images/column.png'
import computer from '../../assets/images/computer.png'

export default function ScrollDriven() {
    const [itemIndex, setItemIndex] = useState(0)

    const data = [
        {
            title: "Interfaces modernes",
            gif: columnAnimated,
            icon: column,
            text: "Je développe des interfaces web claires et structurées avec React. J’accorde une attention particulière à la hiérarchie visuelle et à la lisibilité pour améliorer l’expérience utilisateur.",
            alt: "Icone d'un ordinateur representant une interface moderne sur écran large",
            animation: "A"
        },
        {
            title: "Sites responsives",
            gif: computerAnimated,
            icon: computer,
            text: "Je crée des interfaces adaptatives qui s’ajustent à tous les écrans (mobile, tablette, desktop). L’objectif est de garantir une navigation fluide et cohérente sur tous les supports.",
            alt: "Icone d'une grille qui bouge representant une interface qui change selon les écrans",
            animation: "B"
        },
        {
            title: "Animations fluides",
            gif: animationAnimated,
            icon: animation,
            text: "J’intègre des animations légères en CSS et JavaScript pour améliorer la navigation et guider l’utilisateur dans l’interface sans nuire à la performance.",
            alt: "Trois cercles a la suite representant des animations",
            animation: "C"
        },
        {
            title: "Code structuré",
            gif: forkAnimated,
            icon: fork,
            text: "Je développe avec une structure claire basée sur des composants réutilisables. J’utilise React pour organiser le code et faciliter la maintenance et l’évolution des projets.",
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

    useMotionValueEvent(progressB, "change", () => {
        const values = height.map((h) => h.get());

        const activeIndex = values.findIndex((v) => v >= 149); // tolérance

        if (activeIndex !== -1) {
            setItemIndex(activeIndex);
        }
    });
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
                                text={"Conception & développement d’interfaces"}
                            />
                        </h2>
                    </div>
                    <div className='scroll-driven__accordeons'>
                        {data.map((d, index) => (
                            <div 
                                key={d.title + index}
                                className={`accordeon${ itemIndex === index ? " accordeon--active" : ""}`}
                            >
                                <div className='accordeon__icon-wrapper'>
                                    <img className='accordeon__icon' src={ itemIndex === index ? d.gif : d.icon } alt={d.alt} style={ itemIndex === index ? { filter: "brightness(100)" } : {} }/>
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