import { motion } from 'motion/react'
import './list.scss'
import MaskReveal from '../maskreveal/maskreveal'
import { animate } from 'motion'

export default function List({title, items, x, animated, inView, delay}) {
    return(
        <motion.div 
            style={{ x }}
            className='list'
        >
            <motion.p 
                className='list__title'
            >
                
                <MaskReveal
                    text={title}
                    backgroundColor={"#121212"}
                    animated={animated}
                    inView={inView}
                    delay={delay + 0.2}
                />
            </motion.p>
            <ul className='list__wrapper'>
                 {items.map((item, index) => (
                    <motion.li 
                        key={item + index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}  
                        viewport={{ once: true }}
                        className='list__item'
                    >
                        {item}
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    )
}