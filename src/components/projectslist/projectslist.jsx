import './projectslist.scss';
import ProjectCard from '../project-card/project-card';
import { motion } from 'motion/react';
import FadeInText from '../fadeintext/fadeintext';

export default function ProjectsList({projects, selectedCategories, setSelectedCategories}) {

    const selectedProjects = projects.filter(project =>
        project.tags.includes(selectedCategories)
    );

    const categories = [
        "Développement Front-End",
        "React",
        "Responsive design",
        "Animations & interactions",
        "Performance web & SEO"
    ]

    return(
        <section className='projects-list'>
            <div className='projects-list__wrapper'>
                <div className='projects-list__content'>
                    <h2>
                        <FadeInText text={"Projets:"}/>
                    </h2>
                </div>
                <motion.div 
                    className='projects-list__wrapper-line projects-list__wrapper-line--top'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}   
                ></motion.div>
                <motion.div 
                    className='projects-list__categories'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}   
                >
                    <button 
                        className={`projects-list__categories-button ${selectedCategories === "Tous" ? "projects-list__categories-button--active" : ""}`} onClick={() => setSelectedCategories("Tous")}>
                        Tous les projets
                    </button>
                    {categories.map((cat, index) => (
                        <button className={`projects-list__categories-button ${selectedCategories === cat ? "projects-list__categories-button--active" : ""}`} key={cat + index} value={cat} onClick={(e) => setSelectedCategories(e.target.value)}>
                            {cat}
                        </button>
                    ))}
                </motion.div>
                <motion.div 
                    className='projects-list__wrapper-line projects-list__wrapper-line--bottom'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}   
                ></motion.div>
            </div>
            <div className='projects-list__gallery'>
                {selectedCategories === "Tous" ? 
                    projects.map((project, index) => (
                        <motion.div 
                            key={project.id + index} 
                            className='projects-list__gallery-wrapper'
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}   
                        >
                            <ProjectCard
                                project={project}                                
                            />
                        </motion.div>
                    ))
                    :
                    selectedProjects.map((project, index) => (
                        <div key={project.id + index} className='projects-list__gallery-wrapper'>
                            <ProjectCard
                                project={project}                                
                            />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}