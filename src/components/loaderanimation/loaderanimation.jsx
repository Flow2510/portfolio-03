import { motion } from 'motion/react'
import './loaderanimation.scss'

export default function LoaderAnimation() {
    const delays = Array.from({ length: 16 }, () => Math.random() * 1.5);
    const delaysX = Array.from({ length: 16 }, () => Math.random() * (3 - 2) + 2);

    return(
        <motion.div 
            className="loader-animation">
            {delays.map((delay, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: "700px"}}
                    transition={{ 
                        opacity:{ duration: 0.5, delay: delay },
                        y: { duration: 0.5, delay: delaysX[i] }                        
                     }}
                    className="loader-animation__square"
                />
            ))}
        </motion.div>
    )
}