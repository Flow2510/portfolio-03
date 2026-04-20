import { useEffect, useRef, useState } from 'react';
import './carousel.scss';
import { AnimatePresence, motion } from 'motion/react';

export default function Carousel({ projects }){
    const [carouselIndex, setCarouselIndex] = useState(0)
    const timerRef = useRef(null);

    const prevHandleClick = () => {
        setCarouselIndex((prev) => (prev - 1 + projects.length) % projects.length);
        startTimer();
    }

    const nextHandleClick = () => {
        setCarouselIndex((prev) => (prev + 1) % projects.length);
        startTimer();
    }

    const startTimer = () => {
        clearInterval(timerRef.current);

        timerRef.current = setInterval(() => {
        setCarouselIndex((prev) => (prev + 1) % projects.length);
        }, 4000);
    };

    useEffect(() => {
        startTimer();
    }, [])

    return(
        <div className='carousel'>
            <div className='carousel__control'>
                <button 
                    aria-label='Précédent projet'
                    className='carousel__control-button'
                    onClick={prevHandleClick}
                >
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button 
                    aria-label='Projet suivant'
                    className='carousel__control-button'
                    onClick={nextHandleClick}
                >
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>
            <AnimatePresence mode='wait'>
                <motion.img 
                    key={projects[carouselIndex].id}
                    className='carousel__image' src={projects[carouselIndex].image} 
                    alt={projects[carouselIndex].alt} 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                    exit={{ opacity: 0 }}
                    loading='lazy'
                />
            </AnimatePresence>
            <div className='carousel__overlay'></div>
            <AnimatePresence mode='wait'>
                <motion.span 
                    key={projects[carouselIndex].name}
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1}}
                    transition={{ duration: 0.3 }}
                    exit={{ x: 100, opacity: 0}}
                    viewport={{ once: true }}
                    className='carousel__title'
                >
                    <span className='carousel__title--font'>#0{carouselIndex + 1}</span> - {projects[carouselIndex].name}
                </motion.span>
            </AnimatePresence>
        </div>
    )
}