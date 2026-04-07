import { motion } from 'motion/react';
import './footer.scss';

export default function Footer() {
    return(
        <footer className='footer'>
            <motion.div
                className='footer__border'
                initial={{ width: 0 }}
                whileInView={{width: "100%" }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}>
            </motion.div>
            <div className='footer__content'>
                <div className='footer__content-wrapper'>
                    <motion.h2
                        className='footer__content-title'
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true}} 
                    >
                        Footer Title
                    </motion.h2>
                    <motion.p
                        className='footer__content-text'
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}   
                        viewport={{ once: true}} 
                    >
                        Footer Subtitle
                    </motion.p>
                </div>
                <motion.p
                    className='footer__content-text'
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}   
                    viewport={{ once: true}} 
                >
                    Footer Subtitle
                </motion.p>
            </div>
        </footer>
    )
}