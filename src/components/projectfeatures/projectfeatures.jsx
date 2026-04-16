import { motion, useScroll, useTransform } from 'motion/react';
import './projectfeatures.scss';
import { useRef } from 'react';

export default function ProjectFeatures({ project, sectionRef }){
    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "start 10%"]
    })

    const xList = [
        useTransform(scrollYProgress, [0, 0.15, 0.35, 1], ["200vh", "0vh", "0vh", "0vh"]),
        useTransform(scrollYProgress, [0.05, 0.2, 0.4, 1], ["200vh", "200vh", "0vh", "0vh"]),
        useTransform(scrollYProgress, [0.1, 0.25, 0.45, 1], ["200vh", "200vh", "0vh", "0vh"]),
        useTransform(scrollYProgress, [0.15, 0.3, 0.5, 1], ["200vh", "200vh", "0vh", "0vh"]),
        useTransform(scrollYProgress, [0.2, 0.35, 0.55, 1], ["200vh", "200vh", "0vh", "0vh"]),
        useTransform(scrollYProgress, [0.25, 0.4, 0.6, 1], ["200vh", "200vh", "0vh", "0vh"])
    ];

    return(
        <section className='project-features' ref={sectionRef}>
            <div className='project-features__wrapper' ref={ref}>
                <motion.p
                    style={{ x: xList[0] }}
                >
                    <span className='project-features--bold'>Project:</span> {project.name}
                </motion.p>
                <motion.p
                    style={{ x: xList[1] }}
                >
                    <span className='project-features--bold'>Year:</span> {project.year}
                </motion.p>
                {project.link &&
                    <motion.p
                        style={{ x: xList[2] }}
                    >
                        <span className='project-features--bold'>Lien: </span> 
                        <a target='_blank' href={project.link}>{project.link} <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </motion.p>
                }
                {project.git &&
                    <motion.p
                        style={{ x: xList[3] }} 
                    >
                        <span className='project-features--bold'>Github: </span> 
                            <a target='_blank' href={project.git}>{project.git} <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </motion.p>
                }
                <motion.p
                    style={{ x: xList[4] }}
                >
                    <span className='project-features--bold'>Technologies: </span>
                    {project.stack.map((s, index) => (
                        <span key={s + index}>"{s}" </span>
                    ))}
                </motion.p>
                <motion.p
                    style={{ x: xList[5] }}
                >
                    <span className='project-features--bold'>Librairies: </span>
                    {project.library.map((s, index) => (
                        <span key={s + index}>"{s}" </span>
                    ))}
                </motion.p>
            </div>
        </section>
    )
}