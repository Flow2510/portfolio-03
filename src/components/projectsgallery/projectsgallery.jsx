import { motion } from 'motion/react';
import './projectsgallery.scss';

export default function ProjectsGallery({ project }) {
    return(
        <section className='projects-gallery'>
            <div className='projects-gallery__wrapper'>
                {project.gallery.map((i, index) => (
                    <div
                        key={i + index} 
                        className={`projects-gallery__container projects-gallery__container--${index + 1}`}
                    >
                        <motion.img                                 
                            src={i} 
                            alt="" 
                            className={`projects-gallery__wrapper-image`}
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }} 
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}