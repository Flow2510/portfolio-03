import { motion, useScroll, useTransform } from 'motion/react';
import './projectfeatures.scss';
import { useRef } from 'react';
import MaskReveal from '../maskreveal/maskreveal';

export default function ProjectFeatures({ project, sectionRef }){
    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    return(
        <section className='project-features' ref={sectionRef}>
            <div className='project-features__wrapper' ref={ref}>
                <motion.p
                    className='project-features__item'
                >                    
                    <span className='project-features--bold'>
                        <MaskReveal 
                            text={"Project:"}
                            backgroundColor={"#121212"}
                            animated={false}
                            delay={0}
                            inView={true}
                        />
                    </span> 
                    <span>{project.name}</span>
                </motion.p>
                <motion.p
                    className='project-features__item'

                >
                    <span className='project-features--bold'>                        
                        <MaskReveal 
                            text={"Année:"}
                            backgroundColor={"#121212"}
                            animated={false}
                            delay={0}
                            inView={true}
                        />
                    </span> 
                    <span>{project.year}</span>                    
                </motion.p>
                {project.link &&
                    <motion.p
                        className='project-features__item'    
                    >
                        <span className='project-features--bold'>
                            <MaskReveal 
                                text={"Lien:"}
                                backgroundColor={"#121212"}
                                animated={false}
                                delay={0}
                                inView={true}
                            />
                        </span> 
                        <a target='_blank' href={project.link}>{project.link} <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </motion.p>
                }
                {project.git &&
                    <motion.p
                        className='project-features__item'     
                    >
                        <span className='project-features--bold'>
                            <MaskReveal 
                                text={"Github:"}
                                backgroundColor={"#121212"}
                                animated={false}
                                delay={0}
                                inView={true}
                            />
                        </span> 
                            <a target='_blank' href={project.git}>{project.git} <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </motion.p>
                }
                <motion.p
                    className='project-features__item'
                >
                    <span className='project-features--bold'>
                        <MaskReveal 
                            text={"Technologies"}
                            backgroundColor={"#121212"}
                            animated={false}
                            delay={0}
                            inView={true}
                        />
                    </span>
                    {project.stack.map((s, index) => (
                        <span key={s + index}>"{s}" </span>
                    ))}
                </motion.p>
                <motion.p
                    className='project-features__item'
                >
                    <span className='project-features--bold'>
                        <MaskReveal 
                            text={"Librairies:"}
                            backgroundColor={"#121212"}
                            animated={false}
                            delay={0}
                            inView={true}
                        />
                    </span>
                    {project.library.map((s, index) => (
                        <span key={s + index}>"{s}" </span>
                    ))}
                </motion.p>
            </div>
        </section>
    )
}