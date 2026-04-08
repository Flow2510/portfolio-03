import { useNavigate } from 'react-router-dom';
import './featuresection.scss';
import FadeInText from '../fadeintext/fadeintext';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';


export default function FeatureSection({ setSelectedCategories }) {
    const features = [
        {
            title: "Développement Front-End",
            image: "/src/assets/images/frontend.webp",
            alt: "Ecran d'ordinateur avec ligne de code dans un éditeur de texte"
        },
        {
            title: "React",
            image: "/src/assets/images/react.webp",
            alt: "Logo stylisé de REACT"
        },
        {
            title: "Responsive design",
            image: "/src/assets/images/device.webp",
            alt: "Illustration d'un interface sur mobile, tablette et grand écran"
        },
        {
            title: "Animations & interactions",
            image: "/src/assets/images/animation.webp",
            alt: "Illustration d'un design UX"
        },
        {
            title: "Performance web & SEO",
            image: "/src/assets/images/perf.webp",
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

    const navigate = useNavigate()

    return(
        <section className='feature-section'>
            <div className='feature-section__content'>
                <h2 className='feature-section__content-title'>
                    <FadeInText 
                        text={"Mes domaines"}
                    />
                </h2>
            </div>
            <div className='feature-section__wrapper'>
                <motion.div 
                    className='feature-section__border'
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true}}
                ></motion.div>
                {features.map((feature, index) => (
                    <button className='feature' key={feature + index} value={feature.title} onClick={() => {setSelectedCategories(feature.title); navigate('/projects');}}>
                        <div className='feature__overlay'></div>
                        <div className='feature__cursor' style={{ top: pos.y , left: pos.x}}>
                            <img className='feature__cursor-image' src={feature.image} alt="" />
                        </div>
                        <h3 className='feature__title'>
                            <FadeInText text={feature.title}/>
                        </h3>
                        <p className='feature__index'>
                            <FadeInText text={`[00${index + 1}]`} />
                        </p>
                        <motion.div 
                            className='feature__border'
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true}}
                        ></motion.div>
                    </button>
                ))}
            </div>
        </section>
    )
}

