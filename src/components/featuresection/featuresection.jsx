import { NavLink } from 'react-router-dom';
import './featuresection.scss';
import FadeInText from '../fadeintext/fadeintext';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';

import layersAnimed from "../../assets/images/layers.gif"
import layers from "../../assets/images/layers.png"
import react from "../../assets/images/react.png"
import reactAnimed from "../../assets/images/react.gif"
import responsive from "../../assets/images/responsive.png"
import responsiveAnimed from "../../assets/images/responsive.gif"
import animation from "../../assets/images/animation.png"
import animationAnimed from "../../assets/images/animation.gif"
import perf from "../../assets/images/perf.png"
import perfAnimed from "../../assets/images/perf.gif"


export default function FeatureSection() {
    const [activeCard, setActiveCard] = useState(null)

    const features = [
        {
            title: "Intégration Front-End",
            text: "Intégration d’interfaces à partir de maquettes avec une attention particulière à la structure, la réutilisabilité et la qualité du code.",
            gif: layersAnimed,
            image: layers,
            alt: "Icône représentant des couches empilées symbolisant la structure et l’organisation de composants."
        },
        {
            title: "Développement React",
            text: "Création d’applications front-end modulaires avec React, en utilisant des composants réutilisables et une architecture claire.",
            gif: reactAnimed,
            image: react,
            alt: "Icône représentant du code informatique avec des chevrons."
        },
        {
            title: "Responsive design",
            text: "Adaptation des interfaces à tous les formats d’écran en utilisant des approches flexibles et modernes en CSS.",
            gif: responsiveAnimed,
            image: responsive,
            alt: "Icône représentant un écran avec des flèches d’adaptation."
        },
        {
            title: "UI Interactions",
            text: "Ajout d’animations et micro-interactions pour améliorer la fluidité et l’expérience utilisateur sans nuire aux performances.",
            gif: animationAnimed,
            image: animation,
            alt: "Icône composée de blocs représentant des modules animés."
        },
        {
            title: "Optimisation & performance",
            text: "Optimisation des performances front-end et bonnes pratiques de structure pour garantir des interfaces rapides et efficaces.",
            gif: perfAnimed,
            image: perf,
            alt: "Icône de flèche ascendante représentant la progression."
        }
    ];

    const ref=useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    })

    const x = useTransform(scrollYProgress, [0, 1], [-150, 0])
    const y = useTransform(scrollYProgress, [0, 1], [-150, 0])
    const cardHandleClick = (index) => {
        if(index === activeCard){
            setActiveCard(null)
        } else {
            setActiveCard(index)
        }
    }

    return(
        <section className='feature-section' ref={ref}>
            <div style={{ maxWidth: 1200 }}>
                <div className='feature-section__content'>
                    <h2 className='feature-section__content-title'>
                        <FadeInText 
                            text={"Technologies & pratiques"}
                        />
                    </h2>
                </div>
                <motion.div layout className='feature-section__wrapper'>
                    <motion.article
                        className='feature feature--link'
                        style={{ x, y }}
                    >
                        <div className='feature__content'>
                            <h3>Mes projets</h3>
                            <p>
                                Une sélection de projets front-end réalisés avec React : interfaces interactives, intégration d’API et expériences utilisateur modernes.
                            </p>
                        </div>
                        <div className='feature__link-wrapper'>
                            <NavLink className='feature__link' to={'/projects'}>Découvrir <i className="feature__link-icon fa-solid fa-arrow-right"></i></NavLink>
                        </div>
                    </motion.article>
                    {features.map((feature, index) => (
                        <button
                            className='feature__button' 
                            key={feature.title + index} 
                            onClick={() => cardHandleClick(index)}
                        >
                            <article
                                className={`feature${index === activeCard ? " feature--active" : ""}`}
                            >
                                <div className='feature__icon-wrapper'>
                                    <img className={"feature__icon"} src={`${index === activeCard ? feature.gif : feature.image}`} alt={feature.alt}/>
                                </div>
                                <div className='feature__content'>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.text}</p>
                                </div>
                            </article>
                        </button>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}