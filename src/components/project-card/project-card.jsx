import { NavLink } from 'react-router-dom';
import './project-card.scss';

export default function ProjectCard({ project }) {
    return(
        <NavLink className='project-card' to={`/${project.id}`}>
            <div className='project-card__wrapper'>
                <img className='project-card__background' src={project.image} alt="" />
                <div className='project-card__content'>
                    <span>{project.year}</span>
                    <h3>{project.name}</h3>
                    <p>{project.text}</p>
                </div>
            </div>
        </NavLink>
    )
}