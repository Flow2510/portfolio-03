import { motion } from 'motion/react';
import './dualwrapper.scss';

export default function DualWrapper({ photo1, photo2 }) {

    return(
        <section className='dual-wrapper'>
            <div className='dual-wrapper__wrapper'>
                <motion.div 
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y:0, opacity: 1}}
                    transition={{ duration: 0.3}}
                    viewport={{ once: true }}
                    className='dual-wrapper__item'
                >
                    <motion.img className='dual-wrapper__item-image' src={photo1} alt="" />
                </motion.div>
                <motion.div 
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y:0, opacity: 1}}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    viewport={{ once: true }}
                    className='dual-wrapper__item'
                >
                    <motion.img className='dual-wrapper__item-image' src={photo2} alt="" />
                </motion.div>
            </div>
        </section>
    )
}