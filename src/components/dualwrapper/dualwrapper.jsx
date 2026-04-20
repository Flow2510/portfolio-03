import { motion, useScroll, useTransform } from 'motion/react';
import './dualwrapper.scss';
import { useRef } from 'react';

export default function DualWrapper({ photo1, photo2 }) {
    const sectionRef = useRef(null)

    const { scrollYProgress: progressA } = useScroll({
        target: sectionRef,
        offset: ["start end", "start 20%"]
    });

    const { scrollYProgress: progressB } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(progressB, [0, 1], ["0", "-150px"]);
    const x = useTransform(progressA, [0, 1], [-200, 0]);
    const widthA = useTransform(progressA, [0, 1], ["10%", "100%"])

    return(
        <section className='dual-wrapper' ref={sectionRef}>
            <div className='dual-wrapper__wrapper'>
                <motion.div 
                    className='dual-wrapper__item'
                    style={{ width: widthA}}
                >
                    <motion.img style={{ y }} className='dual-wrapper__item-image' src={photo1} alt="" />
                </motion.div>
                <motion.div 
                    className='dual-wrapper__item'
                >
                    <motion.img style={{ y, x }} className='dual-wrapper__item-image' src={photo2} alt="" />
                </motion.div>
            </div>
        </section>
    )
}