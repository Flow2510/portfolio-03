import { NavLink } from 'react-router-dom';
import './cta.scss';
import FadeInText from '../fadeintext/fadeintext';
import { motion } from 'motion/react';

export default function Cta() {
    return(
        <section className='cta'>
            <div className='cta__content'>
                <h3 className='cta__content-title'>
                    <FadeInText text={'Cta Title'}/>
                </h3>
                <motion.p 
                    className='cta__content-text'
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolorum, libero magnam placeat alias fuga dolores. Totam doloribus modi officia obcaecati quisquam ad architecto dolorem iure quo delectus, necessitatibus tenetur!</motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <NavLink to='/' className='cta__content-link'>[<span className='cta__content-link--hover'></span>Link text<span className='cta__content-link--hover'></span>]</NavLink>
                </motion.div>
            </div>
        </section>
    )
}