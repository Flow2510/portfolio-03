import { NavLink } from 'react-router-dom';
import './hero.scss';

export default function Hero() {
    return(
        <section className='hero'>
            <div className='hero__content'>
                <h2 className='hero__content-title'>Title</h2>
                <div className='hero__content-wrapper'>
                    <p className='hero__content-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt enim vero dolorem debitis ratione adipisci dolorum modi quis ducimus autem? Et minus consequuntur tenetur, impedit modi commodi veritatis magnam omnis.</p>
                    <p className='hero__content-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt enim vero dolorem debitis ratione adipisci dolorum modi quis ducimus autem? Et minus consequuntur tenetur, impedit modi commodi veritatis magnam omnis.</p>
                </div>
                <NavLink className='hero__content-link' to={'/'}>[Link Text]</NavLink>
            </div>
        </section>
    )
}