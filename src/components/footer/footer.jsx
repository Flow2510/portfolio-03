import { motion } from 'motion/react';
import './footer.scss';

export default function Footer() {
    return(
        <footer className='footer'>
            <div className='footer__content'>
                <motion.h2
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}   
                >
                    Footer Title
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}   
                >
                    Footer Subtitle
                </motion.p>
            </div>
        </footer>
    )
}