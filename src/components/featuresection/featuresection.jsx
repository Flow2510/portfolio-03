import { useNavigate } from 'react-router-dom';
import './featuresection.scss';
import FadeInText from '../fadeintext/fadeintext';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';


export default function FeatureSection({ setSelectedCategories }) {
    const features = [
        {
            title: "Développement Front-End",
            image: "/src/assets/images/frontend.jpg"
        },
        {
            title: "React",
            image: "/src/assets/images/react.jpg"
        },
        {
            title: "Responsive design",
            image: "/src/assets/images/device.jpg"
        },
        {
            title: "Animations & interactions",
            image: "/src/assets/images/animation.jpg"
        },
        {
            title: "Performance web & SEO",
            image: "/src/assets/images/perf.jpg"
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
                    <button className='feature' key={feature + index} value={feature} onClick={() => {setSelectedCategories(feature); navigate('/projects');}}>
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

