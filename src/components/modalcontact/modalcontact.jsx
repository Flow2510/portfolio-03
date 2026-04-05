import { motion } from 'motion/react';
import './modalcontact.scss';

export default function ModalContact({ setModalContactOpen }) {
    return(
        <motion.section 
            className={`modal-contact`}
            initial={{ y: "-100%"}}
            animate={{ y: "0"}}
            transition={{ duration: 1 }}
            exit={{ y: "100%" }}
        >
            <div className='modal-contact__wrapper'>
                <div>
                    <button type='button' onClick={() => setModalContactOpen(prev => !prev)}>Close</button>
                    <p>faire un formulaire</p>
                </div>
                </div>
        </motion.section>
    )
}