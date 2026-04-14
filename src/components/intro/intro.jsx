import { NavLink } from 'react-router-dom';
import './intro.scss';
import FadeInText from '../fadeintext/fadeintext';
import { motion, useScroll, useTransform } from 'motion/react';

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
                >
                    <NavLink className={'intro__content-link'} to='/projects'>[Retour]</NavLink>
                </motion.div>
                <h2 className={'intro__content-title'}>
                    <FadeInText text={project.name} />
                </h2>
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
                <motion.p 
                    className={'intro__content-text'}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true}} 
                >
                    {project.text}
                </motion.p>
                <motion.p 
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true}} 
                    className={'intro__content-text'}
                >
                    {project.text2}
                </motion.p>
            </div>
        </section>
    )
}