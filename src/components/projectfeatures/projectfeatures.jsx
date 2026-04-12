import { motion } from 'motion/react';
import './projectfeatures.scss';

export default function ProjectFeatures({ project }){
    return(
        <section className='project-features'>
            <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true}} 
            >
                <span className='project-features--bold'>Project:</span> {project.name}
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true}} 
            >
                <span className='project-features--bold'>Year:</span> {project.year}
            </motion.p>
            {project.link &&
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true}} 
                >
                    <span className='project-features--bold'>Lien: </span> 
                    <a target='_blank' href={project.link}>{project.link} <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                </motion.p>
            }
            {project.git &&
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true}} 
                >
                    <span className='project-features--bold'>Github: </span> 
                        <a target='_blank' href={project.git}>{project.git} <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                </motion.p>
            }
            <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true}} 
            >
                <span className='project-features--bold'>Technologies: </span>
                {project.stack.map((s, index) => (
                    <span key={s + index}>"{s}" </span>
                ))}
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true}} 
            >
                <span className='project-features--bold'>Librairies: </span>
                {project.library.map((s, index) => (
                    <span key={s + index}>"{s}" </span>
                ))}
            </motion.p>
        </section>
    )
}