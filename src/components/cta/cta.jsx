import { NavLink } from 'react-router-dom';
import './cta.scss';

export default function Cta() {
    return(
        <section className='cta'>
            <div className='cta__content'>
                <h3 className='cta__content-title'>Cta Title</h3>
                <p className='cta__content-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolorum, libero magnam placeat alias fuga dolores. Totam doloribus modi officia obcaecati quisquam ad architecto dolorem iure quo delectus, necessitatibus tenetur!</p>
                <NavLink to='/' className='cta__content-link'><span className='cta__content-link--left'></span>[Link text]<span className='cta__content-link--right'></span></NavLink>
            </div>
        </section>
    )
}