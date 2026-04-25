import { useRef } from 'react'
import './visualcta.scss'
import { motion, useScroll, useTransform } from 'motion/react'

export default function VisualCTA() {
    const wrapperRef = useRef(null)

    const { scrollYProgress: progressB } = useScroll({
        target: wrapperRef,
        offset: ["end end", "end center"]
    })
    
    const y = useTransform(progressB, [0, 1], ["-50%", "-200%"])

    return(
        <div className='visual-cta' ref={wrapperRef}>
            <div className='visual-cta__wrapper'>
                <motion.span 
                    style={{ y }}
                    className='visual-cta__subtitle visual-cta__subtitle--left'
                >
                    <motion.span
                    >
                        Designs modernes 
                    </motion.span>
                </motion.span>
                <h2 style={{overflow: 'hidden'}}>
                    <motion.span
                        initial={{ y: 200 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5}}
                        style={{ display: 'inline-block' }}
                    >
                        Créer 
                    </motion.span>
                </h2>
            </div>
            <div className='visual-cta__wrapper'>
                <h2 style={{overflow: 'hidden'}}>
                    <motion.span
                        initial={{ y: 200 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5}}
                    >
                        Des
                    </motion.span>
                </h2>
                <motion.span 
                    style={{ y }}
                     className='visual-cta__subtitle visual-cta__subtitle--right'
                >
                    <motion.span
                    >
                        expériences fluides
                    </motion.span>
                </motion.span>
            </div>
            <div className='visual-cta__wrapper'>
                <h2>
                    Interfaces Web
                </h2>
            </div>
        </div>
    )
}