import { motion } from 'motion/react';
import './presentation.scss';
import FadeInText from '../fadeintext/fadeintext';
import List from '../list/list';

export default function Presentation() {
    const stud = ["Exemple", "Exemple", "Exemple", "Exemple"];
    const comp = ["Exemple", "Exemple", "Exemple", "Exemple"];
    const learn = ["Exemple", "Exemple", "Exemple", "Exemple"];
    const contact = ["exemple@exemple.com", "+336 00 00 00 00"];

    return(
        <section className='presentation'>
            <h2>
                <FadeInText text={"Title"}/>
            </h2>
            <div className='presentation__wrapper'>
                <div className='presentation__container'>
                    <motion.div 
                        className='presentation__image-wrapper'
                    >
                        <motion.img 
                            className='presentation__image' 
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            src="/src/assets/images/silhouette.jpg" 
                            alt="" 
                        />
                    </motion.div>
                </div>
                <div className='presentation__content'>
                    <div className='presentation__content-container'>
                        <motion.p 
                            className='presentation__content-text'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}  
                            viewport={{ once: true }}
                        >
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed dolorem corrupti consequuntur similique velit, quisquam delectus, eveniet sint ad quia pariatur nihil vero, expedita voluptatem neque a dicta. Nemo, maiores?
                        </motion.p>
                        <motion.p 
                            className='presentation__content-text'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}  
                            viewport={{ once: true }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat consectetur pariatur exercitationem ipsum hic! Ratione, maxime quis? Fuga, cupiditate ex distinctio alias atque explicabo quam sint iusto dolore obcaecati culpa.
                        </motion.p>
                        <motion.p 
                            className='presentation__content-text'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}  
                            viewport={{ once: true }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat consectetur pariatur exercitationem ipsum hic! Ratione, maxime quis? Fuga, cupiditate ex distinctio alias atque explicabo quam sint iusto dolore obcaecati culpa.
                        </motion.p>
                    </div>
                    <List title={'Parcours:'} items={stud}/>
                    <List title={'Stack:'} items={comp}/>
                    <List title={'Projets:'} items={comp}/>
                    <List title={'Apprentissage:'} items={learn}/>
                    <div className='presentation__content-wrapper'>
                        <motion.p 
                            className='presentation__content-subtitle'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }} 
                            viewport={{ once: true }}
                        >
                            Social:
                        </motion.p>
                        <ul className='presentation__list'>
                            <motion.li 
                                className='presentation__list-item'
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <a target='_blank' href="https://www.github.com">github</a>
                            </motion.li>
                            <motion.li 
                                className='presentation__list-item'
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <a target='_blank' href="https://www.linkedin.com">linkedin</a>
                            </motion.li>
                        </ul>
                    </div>
                    <div className='presentation__content-wrapper'>
                        <motion.p 
                            className='presentation__content-subtitle'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }} 
                            viewport={{ once: true }}
                        >
                            CV:
                        </motion.p>
                        <ul className='presentation__list'>
                            <motion.li 
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className='presentation__list-item'
                            >
                                <a target='_blank' href="https://www.github.com">Download</a>
                            </motion.li>
                        </ul>
                    </div>
                    <List title={'Contact:'} items={contact}/>
                </div>
            </div>
        </section>
    )
}