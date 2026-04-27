import { motion, useScroll, useTransform } from 'motion/react'
import './gallery.scss'
import { useRef, useState } from 'react'

import Carousel from '../carousel/carousel'
import AnimatedText from '../animatedtext/animatedtext'
import FadeInText from '../fadeintext/fadeintext'
import { NavLink } from 'react-router-dom'

export default function Gallery({ sectionRef, projects }) {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
    
    const ref = useRef(null)

    const { scrollYProgress : progressA } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const xList = [
  useTransform(progressA, [0, 0.7], ["0vw", "-60vw"]),
  useTransform(progressA, [0, 0.7], ["0vw", "-50vw"]),
  useTransform(progressA, [0, 0.7], ["0vw", "60vw"]),
  useTransform(progressA, [0, 0.7], ["0vw", "60vw"]),
  useTransform(progressA, [0, 0.7], ["0vw", "-40vw"]),
  useTransform(progressA, [0, 0.7], ["0vw", "50vw"]),
]

const yList = [
  useTransform(progressA, [0, 0.7], ["0vh", "-50vh"]),
  useTransform(progressA, [0, 0.7], ["0vh", "40vh"]),
  useTransform(progressA, [0, 0.7], ["0vh", "-16vh"]),
  useTransform(progressA, [0, 0.7], ["0vh", "-36vh"]),
  useTransform(progressA, [0, 0.7], ["0vh", "20vh"]),
  useTransform(progressA, [0, 0.7], ["0vh", "60vh"]),
]

    const scale = useTransform(progressA, [0, 0.5], [1, 2]);

    return(
        <section className='gallery' ref={sectionRef}>
            <div className='gallery__wrapper'>
                <div className='gallery__intro'>
                    <h2>
                        <FadeInText 
                            text={("Projets & réalisations")}
                        />
                    </h2>
                    <p>
                        <AnimatedText 
                            transitionColor={"#12121280"}
                            finalColor={"#121212"}
                            text={"Voici une sélection de projets front-end réalisés pour mettre en pratique mes compétences en React, UI design et intégration d’interfaces modernes."}
                        />
                    </p>
                </div>
                {isDesktop ? 
                    <div className='gallery__sticky' ref={ref} id='gallery'>
                        <div className='gallery__content'>
                            <div className='gallery__content-wrapper'>
                                {projects.slice(0, 6).map((p, index) => (
                                    <motion.div 
                                        className={`gallery__content-item gallery__content-item--${index + 1}`} 
                                        key={p.name + index}
                                        style={{ x: xList[index], y: yList[index] }}
                                    >
                                        <NavLink to={`/${p.id}`}>
                                            <img 
                                                className={`gallery__content-image`} 
                                                src={p.image} 
                                                alt={p.alt}                                                                                                
                                            />
                                        </NavLink>
                                    </motion.div>
                                ))}
                                <motion.div
                                    className={`gallery__content-carousel`} 
                                    style={{ scale }}
                                >
                                    <Carousel
                                        projects={projects}
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='gallery__mobile'>
                        <div className='gallery__mobile-wrapper'>
                            <Carousel 
                                projects={projects}
                            />
                        </div>
                    </div>
                }
            </div>
        </section>
    )
}