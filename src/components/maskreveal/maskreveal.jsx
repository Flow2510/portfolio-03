import { motion, useScroll, useTransform } from 'motion/react';
import './maskreveal.scss';
import { useRef } from 'react';

export default function MaskReveal({text, backgroundColor, animated, inView, delay}) {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start 90%", "end 20%"]
    })

    const xMask = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"])
    const xText = useTransform(scrollYProgress, [0, 0.5], ["-100%", "0%"])

    return(
        <span className='mask-reveal' ref={ref}>
            <motion.span 
                initial={animated ? { background: backgroundColor, x: "-100%" } : {}}
                animate={animated ? { x: "100%" } : {}}
                transition={{ duration: 1, delay }}
                style={inView ? { background: backgroundColor, x: xMask } : {}}
                className='mask-reveal__mask'
            ></motion.span>
            <motion.span 
                initial={animated ? {  x: "-100%" } : {}}
                animate={animated ? { x: "0" } : {}}
                transition={{ duration: 0, delay: delay + 0.2 }}
                style={inView ? { x: xText } : {}}
                className='mask-reveal__text'
            >
                {text}
            </motion.span>
        </span>
    )
}