import { AnimatePresence, motion } from 'motion/react';
import './loader.scss';
import { useEffect, useState } from 'react';

export default function Loader() {
    const [loadingNumber, setLoadingNumber] = useState(0);

    useEffect(() => {
        const firstRandomNumber =
            Math.floor(Math.random() * (40 - 15 + 1)) + 15;

        const secondRandomNumber =
            Math.floor(Math.random() * (85 - 60 + 1)) + 60;

        const timer1 = setTimeout(() => {
            setLoadingNumber(firstRandomNumber);
        }, 1000);

        const timer2 = setTimeout(() => {
            setLoadingNumber(secondRandomNumber);
        }, 2000);

        const timer3 = setTimeout(() => {
            setLoadingNumber(100);
        }, 3000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, []);

    return(
        <section className='loader'>
            <motion.h2 
                initial={{ y: -25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    duration: 0.5
                }}
                className='loader__title'
            >
                FLORIAN SENDRA ©
            </motion.h2>
            <motion.h2 
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "100px" }}
                transition={{
                    duration: 0.6
                }}
                className='loader__subtitle'
            >
                [Chargement...]
            </motion.h2>
            <motion.div 
                initial={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.6 }}
                className='loader__line loader__line--1'
            >
                
            </motion.div>
            <motion.div 
                initial={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className='loader__line loader__line--2'
            >

            </motion.div>
            <motion.div 
                initial={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.4 }}
                className='loader__content'
            >
                <p className='loader__count'>
                    <span style={{ overflow: "hidden"}}>
                        <AnimatePresence mode='wait'>
                            <motion.span 
                                initial={{ y: "100%" }} 
                                animate={{ y: "0%"}} 
                                exit={{ y: "-100%"}} 
                                transition={{ duration: 0.3 }}
                                key={loadingNumber} 
                                className='loader__count-number'
                            >
                                {loadingNumber}
                            </motion.span>
                        </AnimatePresence>
                    </span>
                    <span className='loader__count-text'>
                        %
                    </span>
                </p>
            </motion.div>
            <motion.div 
                initial={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className='loader__line loader__line--3'
            >

            </motion.div>
            <motion.div 
                initial={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className='loader__line loader__line--4'
            >

            </motion.div>
        </section>
    )
}