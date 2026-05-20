import './projectfeatures.scss';
import FeatureList from '../featurelist/featurelist';

export default function ProjectFeatures({ project, sectionRef }){

    return(
        <section className='project-features' ref={sectionRef}>
            <div className='project-features__wrapper'>
                <FeatureList 
                    item={project.name}
                    title={"Projet:"}
                    list={false}
                />
                <FeatureList 
                    title={"Année:"}
                    item={project.year}
                    list={false}
                />
                {project.link &&
                    <FeatureList 
                        link={true}
                        list={false}
                        title={"Lien:"}
                        item={project.link}
                    />
                }
                {project.git &&
                    <FeatureList 
                        link={true}
                        list={false}
                        title={"Github:"}
                        item={project.git}
                    />
                }
                <FeatureList 
                    link={false}
                    list={true}
                    title={"Technologies:"}
                    item={project.stack}
                />
                <FeatureList 
                    link={false}
                    list={true}
                    title={"Librairies:"}
                    item={project.library}
                />
            </div>
        </section>
    )
}