import { motion } from 'motion/react';
import './loader.scss';

export default function Loader() {
    return(
        <motion.section 
            className={`loader`}
            initial={{ y: "100%"}}
            animate={{ y: "0"}}
            transition={{ duration: 1 }}
            exit={{ y: "-100%" }}
        >
            <div className='modal-contact__wrapper'>
                <div>
                    <p>faire un Loader</p>
                </div>
                </div>
        </motion.section>
    )
}