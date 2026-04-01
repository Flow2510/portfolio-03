import './projectfeatures.scss';

export default function ProjectFeatures({ project }){
    return(
        <section className='project-features'>
            <p>Project: {project.name}</p>
            <p>Year: {project.year}</p>
            {project.link &&
                <p>Link: <a target='_blank' href={project.link}>{project.link} <i className="fa-solid fa-arrow-up-right-from-square"></i></a></p>
            }
            {project.git &&
                <p>Link: {project.git}</p>
            }
            <p>
                <span>Technologies: </span>
                {project.stack.map((s, index) => (
                    <span key={s + index}>"{s}" </span>
                ))}
            </p>
        </section>
    )
}