import { NavLink } from 'react-router-dom';
import './returnsection.scss';

export default function ReturnSection(){
    return(
        <section className='return-section'>
            <div className='return-section__overlay'></div>
            <div className='return-section__wrapper'>
                <NavLink className='return-section__link' to={'/projects'}>Retour aux Projets</NavLink>
            </div>
        </section>
    )
}