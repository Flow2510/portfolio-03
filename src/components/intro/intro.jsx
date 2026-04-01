import { NavLink } from 'react-router-dom';
import './intro.scss';

export default function Intro({ project }) {
    return(
        <section className='intro'>
            <div className='intro__content'>
                <NavLink className={'intro__content-link'} to='/projects'>[Retour]</NavLink>
                <h2 className={'intro__content-title'}>{project.name}</h2>
                <img className={'intro__content-image'} src={project.image} alt="" />
                <p className={'intro__content-text'}>{project.text}</p>
                <p className={'intro__content-text'}>{project.text2}</p>
            </div>
        </section>
    )
}