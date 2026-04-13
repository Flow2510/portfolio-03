import { NavLink } from 'react-router-dom';
import './featuresection.scss';
import FadeInText from '../fadeintext/fadeintext';
import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

import layersAnimed from "../../assets/images/layers.gif"
import layers from "../../assets/images/layers.png"
import react from "../../assets/images/react.png"
import device from "../../assets/images/device.png"
import animation from "../../assets/images/animation.png"
import perf from "../../assets/images/perf.png"


export default function FeatureSection() {
    const [activeCard, setActiveCard] = useState(null)

    const features = [
        {
            title: "Développement Front-End",
            text: "Création d’interfaces modernes, accessibles et maintenables avec les technologies web actuelles.",
            gif: layersAnimed,
            image: layers,
            alt: "Ecran d'ordinateur avec ligne de code dans un éditeur de texte"
        },
        {
            title: "React",
            text: "Développement d’applications dynamiques et performantes avec une architecture claire et scalable.",
            image: react,
            alt: "Logo stylisé de REACT"
        },
        {
            title: "Responsive design",
            text: "Interfaces pensées pour s’adapter parfaitement à tous les écrans, du mobile au desktop.",
            image: device,
            alt: "Illustration d'un interface sur mobile, tablette et grand écran"
        },
        {
            title: "Animations & interactions",
            text: "Création d’expériences fluides et engageantes grâce à des animations soignées et naturelles.",
            image: animation,
            alt: "Illustration d'un design UX"
        },
        {
            title: "Performance web & SEO",
            text: "Optimisation des performances et du référencement pour des sites rapides et visibles.",
            image: perf,
            alt: "Illustration d'un écran d'ordinateur avec un compteur de performance"
        }
    ];

    const [pos, setPos] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPos({
                x: e.clientX,
                y: e.clientY
            })
        }

        globalThis.addEventListener("mousemove", handleMouseMove);

        return () => {
        globalThis.removeEventListener("mousemove", handleMouseMove);
        };
    }, [])

    const ref=useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    })

    const x = useTransform(scrollYProgress, [0, 1], [-150, 0])

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
                            <NavLink className='feature__link'>Découvrir <i className="fa-solid fa-arrow-right"></i></NavLink>
                        </div>
                    </motion.article>
                    {features.map((feature, index) => (
                        <button
                            className='feature__button' 
                            key={feature.title + index} 
                            onClick={() => setActiveCard(index)}
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