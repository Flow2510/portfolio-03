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
            title: "Développement Front-End",
            text: "Création d’interfaces modernes, accessibles et maintenables avec les technologies web actuelles.",
            gif: layersAnimed,
            image: layers,
            alt: "Icône représentant des couches empilées symbolisant la structure et l’organisation de composants ou de données."
        },
        {
            title: "React",
            text: "Développement d’applications dynamiques et performantes avec une architecture claire et scalable.",
            gif: reactAnimed,
            image: react,
            alt: "Icône représentant du code informatique avec des chevrons, symbolisant le développement et la programmation."
        },
        {
            title: "Responsive design",
            text: "Interfaces pensées pour s’adapter parfaitement à tous les écrans, du mobile au desktop.",
            gif: responsiveAnimed,
            image: responsive,
            alt: "Icône représentant un écran avec des flèches indiquant l’adaptation du contenu aux différentes tailles d’affichage"
        },
        {
            title: "Animations & interactions",
            text: "Création d’expériences fluides et engageantes grâce à des animations soignées et naturelles.",
            gif: animationAnimed,
            image: animation,
            alt: "Icône composée de trois carrés représentant des modules qui s'anime"
        },
        {
            title: "Performance web & SEO",
            text: "Optimisation des performances et du référencement pour des sites rapides et visibles.",
            gif: perfAnimed,
            image: perf,
            alt: "Icône de flèche ascendante représentant la progression"
        }
    ];

    const ref=useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    })

    const x = useTransform(scrollYProgress, [0, 1], [-150, 0])

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
                        style={{ x }}
                    >
                        <div className='feature__content'>
                            <h3>Mes projets</h3>
                            <p>Animations, interactions et UI modernes. Chaque projet est une exploration.</p>
                        </div>
                        <div className='feature__link-wrapper'>
                            <NavLink className='feature__link' to={'/projects'}>Découvrir <i className="fa-solid fa-arrow-right"></i></NavLink>
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