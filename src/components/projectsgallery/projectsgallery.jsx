import { motion } from 'motion/react';
import './projectsgallery.scss';

export default function ProjectsGallery({ project }) {
    return(
        <section className='projects-gallery'>
            <div className='projects-gallery__wrapper'>
                {project.gallery.map((i, index) => (
                    <motion.img 
                        key={i + index} 
                        src={i} alt="" 
                        className={`projects-gallery__wrapper-image projects-gallery__wrapper-image--${index + 1}`}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true}} 
                    />
                ))}
            </div>
        </section>
    )
}