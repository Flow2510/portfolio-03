import { NavLink } from 'react-router-dom';
import './intro.scss';
import FadeInText from '../fadeintext/fadeintext';
import { motion, useScroll, useTransform } from 'motion/react';
import AnimatedText from '../animatedtext/animatedtext';

export default function Intro({ project, sectionRef }) {
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    })

    const width = useTransform(scrollYProgress, [0, 1], ["100%", "50%"])

    return(
        <section className='intro'>
            <div className='intro__content'>
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.3}} 
                    style={{display: 'flex', flexDirection: "column", gap: "1rem"}}
                >
                    <NavLink className={'intro__content-link'} to='/projects'>[Retour]</NavLink>
                    <h2 className={'intro__content-title'}>
                        <FadeInText text={project.name} />
                    </h2>
                </motion.div>
                
                <div
                     className={'intro__content-wrapper'}
                >
                    <motion.div 
                        style={{ width }} 
                        className='intro__content-transform'
                    >
                        <motion.img 
                            className={'intro__content-image'} 
                            src={project.image} 
                            alt="" 
                        />
                    </motion.div>
                </div>
                <div className={'intro__text-wrapper'}>
                    <motion.p 
                        className={'intro__text'}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true}} 
                    >
                        <AnimatedText 
                            text={project.text}
                            transitionColor={"#12121280"}
                            finalColor={"#121212"}
                        />
                    </motion.p>
                </div>
            </div>
        </section>
    )
}