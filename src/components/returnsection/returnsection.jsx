import { NavLink } from 'react-router-dom';
import './returnsection.scss';

export default function ReturnSection({ to, text }){
    return(
        <section className='return-section'>
            <div className='return-section__overlay'></div>
            <div className='return-section__wrapper'>
                <NavLink className='return-section__link' to={to}>{text}</NavLink>
            </div>
        </section>
    )
}