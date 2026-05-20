import { motion } from 'motion/react';
import './maskreveal.scss';

export default function MaskReveal({text, backgroundColor, delay}) {
    return(
        <span className='mask-reveal'>
            <motion.span 
                initial={{ background: backgroundColor, x:"-100%" }}
                whileInView={{ x: "100%" }}
                transition={{ duration: 1, delay }}
                viewport={{ once: true }}
                className='mask-reveal__mask'
            ></motion.span>
            <motion.span 
                initial={{ x: "-100%"}}
                whileInView={{ x: "0%"}}
                transition={{ duration: 0, delay: delay + 0.2 }}
                viewport={{ once: true }}
                className='mask-reveal__text'
            >
                {text}
            </motion.span>
        </span>
    )
}