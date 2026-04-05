import { NavLink } from 'react-router-dom';
import './project-card.scss';
import { motion } from 'motion/react';

export default function ProjectCard({ project }) {
    return(
        <NavLink className='project-card' to={`/${project.id}`}>
            <motion.div 
                className='project-card__wrapper'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.2, once: true }}

                transition={{ duration: 0.5 }}  
            >
                <img className='project-card__background' src={project.image} alt={project.alt} loading='lazy' />
                <div className='project-card__content'>
                    <div className='project-card__content-wrapper'>
                        <span>{project.year}</span>
                        <h3>{project.name}</h3>
                        <p>{project.intro}</p>
                    </div>
                </div>
            </motion.div>
        </NavLink>
    )
}