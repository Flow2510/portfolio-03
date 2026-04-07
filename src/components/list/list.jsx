import { motion } from 'motion/react'
import './list.scss'

export default function List({title, items}) {
    return(
        <div className='list'>
            <motion.p 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}  
                viewport={{ once: true }}
                className='list__title'
            >
                {title}
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
        </div>
    )
}