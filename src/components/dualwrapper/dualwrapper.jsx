import { motion, useScroll, useTransform } from 'motion/react';
import './dualwrapper.scss';
import { useRef } from 'react';
import { useWindowWidth } from '../../functions/useWindowWidth';
import FadeInText from '../fadeintext/fadeintext';

import photo1 from "../../assets/images/silhouette.webp"
import photo2 from "../../assets/images/silhouette2.webp"

export default function DualWrapper({ sectionBref }) {
    const galleryRef = useRef(null)
    const windowWidth = useWindowWidth();

    const { scrollYProgress: progressA } = useScroll({
        target: galleryRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(progressA, [0, 1], ["0", "-200px"]);
    const widthA = useTransform(progressA, [0, 0.2, 0.8, 1], ["75%", "75%", "25%", "25%"])
    const widthB = useTransform(progressA, [0, 0.2, 0.8, 1], ["25%", "25%","75%", "75%"])

    return(
        <section className='dual-wrapper' ref={sectionBref}>
            <div className='dual-wrapper__wrapper'>
                <div className='dual-wrapper__content' >
                    <h2>
                        <FadeInText 
                            text={"à propos de moi"}
                        />
                    </h2>
                    <p className='dual-wrapper__content-text'>
                        <span className='dual-wrapper__content-text--opacity'>
                            Simplicité, clarté, interaction. 
                        </span> 
                        <span>
                            Je développe des interfaces modernes pensées pour être lisibles, fluides et agréables à utiliser, sur tous les supports.
                        </span>
                    </p>
                </div>
                {windowWidth > 768 ? (
                    <div className='dual-wrapper__gallery' ref={galleryRef}>
                        <motion.div 
                            className='dual-wrapper__item'
                            style={{width: widthA}}
                        >
                            <motion.img style={{ y }} className='dual-wrapper__item-image' src={photo1} alt="" />
                        </motion.div>
                        <motion.div 
                            style={{width: widthB}}
                            className='dual-wrapper__item'
                        >
                            <motion.img style={{ y }} className='dual-wrapper__item-image' src={photo2} alt="" />
                        </motion.div>
                    </div>
                ) : (
                    <div className='dual-wrapper__gallery'>
                        <motion.div 
                            className='dual-wrapper__item'
                        >
                            <motion.img className='dual-wrapper__item-image' src="/src/assets/images/silhouette.webp" alt="" />
                        </motion.div>
                        <motion.div 
                            className='dual-wrapper__item'
                        >
                            <motion.img className='dual-wrapper__item-image' src="/src/assets/images/silhouette2.webp" alt="" />
                        </motion.div>
                    </div>
                )}
            </div>
        </section>
    )
}