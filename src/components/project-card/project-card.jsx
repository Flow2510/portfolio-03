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
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.5 }}  
            >
                <img className='project-card__background' src={project.image} alt="" loading='lazy' />
                <div className='project-card__content'>
                    <span>{project.year}</span>
                    <h3>{project.name}</h3>
                    <p>{project.text}</p>
                </div>
            </motion.div>
        </NavLink>
    )
}