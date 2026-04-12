import { useEffect, useRef, useState } from 'react';
import ProjectCard from '../project-card/project-card';
import './gallery.scss';
import { motion, useScroll, useTransform } from 'motion/react';

export default function Gallery({ projects }) {
    const [itemWidth, setItemWidth] = useState(window.innerWidth);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    const itemRef = useRef(null);

    useEffect(() => {
    if (itemRef.current) {
        setItemWidth(itemRef.current.offsetWidth);
    }
    }, []);
   
    const items = projects.length;
    const gaps = 36; // ton espacement entre items
    const itemWidthWithGap = itemWidth + gaps;
    const totalDistance = isDesktop? 
            itemWidthWithGap * (items - 1)
        : 
            0;

    const scrollRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start start", "end end"]
    });
    const x = useTransform(scrollYProgress, [0, 1], [0, isDesktop ? -totalDistance : 0]);

    return(
        <section className='gallery' id='gallery' ref={scrollRef}>
            <div className='gallery__sticky'>
                <motion.div className='gallery__wrapper'  style={{ x }}>
                    {projects.map((project, index) => (
                        <motion.div 
                            key={project.id + index} 
                            ref={itemRef} 
                            className='gallery__wrapper-container'
                            viewport={{ once: true }}
                            initial={ isDesktop? { x: 100 } : { y: 100 }}
                            whileInView={ isDesktop? { x:0 } : { y: 0 }}
                            transition={isDesktop? { duration: 0.8 } : { duration: 0.5 }}
                            exit={false}
                        >
                            <ProjectCard
                                project={project}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}