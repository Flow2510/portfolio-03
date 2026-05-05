import { useEffect, useRef, useState } from 'react';
import './carousel.scss';
import { AnimatePresence, motion } from 'motion/react';
import { NavLink } from 'react-router-dom';

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

    const animationRight = {
        initial: { x: "100%" },
        animate: { x: "0%" },
        exit: { x: "-100%" }
    }

    const animationLeft = {
        initial: { x: "-100%" },
        animate: { x: "0%" },
        exit: { x: "100%" }
    }

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
            <AnimatePresence mode="wait">
                <motion.div
                    key={projects[carouselIndex].id}
                    {...animationRight}
                    transition={{ duration: 0.3 }}
                    style={{ height: "100%"}}
                >
                    <NavLink to={`/${projects[carouselIndex].id}`}>
                        <img
                            className="carousel__image"
                            src={projects[carouselIndex].image}
                            alt={projects[carouselIndex].alt}
                            loading="lazy"
                        />
                    </NavLink>
                    <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className='carousel__title'
                    >
                        <span className='carousel__title--font'>#0{carouselIndex + 1}</span> - {projects[carouselIndex].name}
                    </motion.span>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}