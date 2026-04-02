import { useEffect, useRef, useState } from 'react';
import ProjectCard from '../project-card/project-card';
import './gallery.scss';
import { motion, useScroll, useTransform } from 'motion/react';

export default function Gallery({ projects }) {
    const [itemWidth, setItemWidth] = useState(window.innerWidth);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    useEffect(() => {
    const handleResize = () => {
        setItemWidth(window.innerWidth);
        setIsDesktop(window.innerWidth >= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
   
    const items = projects.length;
    const gaps = 21; // ton espacement entre items
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
        <section className='gallery' ref={scrollRef}>
            <div className='gallery__sticky'>
                <motion.div className='gallery__wrapper' style={{ x }}>
                    {projects.map((project, index) => (
                        <div key={project.id + index} className='gallery__wrapper-container'>
                            <ProjectCard
                                project={project}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}