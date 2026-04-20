import { motion, useScroll, useTransform } from 'motion/react';
import './project.scss';
import { useRef } from 'react';
import AnimatedText from '../animatedtext/animatedtext';

export default function Project({ project, index }) {
    const articleRef = useRef(null)

    const { scrollYProgress: progressA } = useScroll({
        target: articleRef,
        offset: ["start end", "end start"]
    })

    const { scrollYProgress: progressB } = useScroll({
        target: articleRef,
        offset: ["end end", "end start"]
    })

    const yBackground = useTransform(progressA, [0, 1], [-200, 200])
    const yContent = useTransform(progressB, [0, 1], [0, -200])

    return(
        <article
            className='project'
            ref={articleRef}
        >
            <motion.img 
                style={{ y: yBackground }}
                className='project__background'
                src={project.image} 
                alt={project.alt} 
            />
            <div className='project__overlay'></div>
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className='project__wrapper' 
                style={{ y: yContent }}
            >
                <span className='project__index'>
                    <i><span className='project__index--color'>#</span>0{index}</i>
                </span>
                <motion.div className='project__content' >
                    <h3>{project.name}</h3>
                    <p>
                        <AnimatedText 
                            text={project.intro}
                            transitionColor={"#fafafa80"}
                            finalColor={"#fafafa"}
                        />
                    </p>
                </motion.div>
            </motion.div>
        </article>
    )
}