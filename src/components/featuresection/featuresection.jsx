import { useNavigate } from 'react-router-dom';
import './featuresection.scss';
import FadeInText from '../fadeintext/fadeintext';
import { motion } from 'motion/react';


export default function FeatureSection({ setSelectedCategories }) {
    const features = [
            "Développement Front-End",
            "React",
            "Responsive design",
            "Animations & interactions",
            "Performance web & SEO"
    ]

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
                        <h3 className='feature__title'>
                            <FadeInText text={feature}/>
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

