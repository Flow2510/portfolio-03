import './projectsgallery.scss';

export default function ProjectsGallery({ project }) {
    return(
        <section className='projects-gallery'>
            <div className='projects-gallery__wrapper'>
                {project.gallery.map((i, index) => (
                    <img key={i + index} src={i} alt="" className={`projects-gallery__wrapper-image projects-gallery__wrapper-image--${index + 1}`}/>
                ))}
            </div>
        </section>
    )
}