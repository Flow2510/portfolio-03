import { motion } from 'motion/react';
import './loader.scss';
import LoaderAnimation from '../loaderanimation/loaderanimation';

export default function Loader() {
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
                transition={{ duration: 0.8, delay: 0.2 }}
                className='loader__content'
            >
                <LoaderAnimation />
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