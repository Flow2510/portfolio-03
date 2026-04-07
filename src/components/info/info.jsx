import { motion } from 'motion/react'
import FadeInText from '../fadeintext/fadeintext'
import './info.scss'


export default function Info() {
    const data = [
        {
            text: "email@exemple.fr",
            id: "e", 
            link: "mailto:exemple@exemple.fr"
        },
        {
            text: "+336 66 66 66 66",
            id: "m",
            link: "https://wa.me/1XXXXXXXXXX"
        },
        {
            text: "Perpignan, France",
            id: "l",
            link: "https://maps.google.fr"
        }
    ]
    return(
        <section className='info'>
            <div className='info__wrapper'>
                <div className='info__content'>
                    <h2 className='info__content-title'>
                        <FadeInText text={'Contact:'}/>
                    </h2>
                </div>
                <div className='info__list'>
                    <motion.div 
                        className='info__border'
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 0.5 }}  
                        viewport={{ once: true}} 
                    ></motion.div>
                    {data.map((d, index) => (
                        <a className='info__item' key={d.id + index} href={d.link} target='__blank'>
                            <div className='info__item-overlay'></div>
                            <h3 className='info__item-title'><span className='info__item-id'>[{d.id}]</span> <FadeInText text={d.text}/></h3>
                            <motion.div 
                                className='info__item-border'
                                initial={{ width: 0 }}
                                whileInView={{ width: '100%' }}
                                transition={{ duration: 0.5 }}   
                                viewport={{ once: true}} 
                            ></motion.div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}