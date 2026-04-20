import './projectsgallery.scss';
import data from '../../data/projects.json';
import Project from '../project/project';
import { NavLink } from 'react-router-dom';

export default function ProjectsGallery() {


    return(
        <section 
            className='projects-gallery'
        >
            {data.map((project, index) => (
                <NavLink
                    key={project.id + index}
                    to={`/${project.id}`}
                    className='projects-gallery__item'
                >
                    <Project 
                        project={project}
                        index={index + 1}
                    />
                </NavLink>
            ))}
        </section>
    )
}