import { useNavigate } from 'react-router-dom';
import './featuresection.scss';

export default function FeatureSection({ setSelectedCategories }) {
    const features = [
            "Développement Front-End",
            "React",
            "Responsive design",
            "Animations & interactions",
            "Performance web & SEO"
    ]

    const navigate = useNavigate()

    return(
        <section className='feature-section'>
            <div className='feature-section__content'>
                <h2>Mes domaines</h2>
            </div>
            <div className='feature-section__wrapper'>
                {features.map((feature, index) => (
                    <button className='feature' key={feature + index} value={feature} onClick={() => {setSelectedCategories(feature); navigate('/projects');}}>
                        <div className='feature__overlay'></div>
                        <h3 className='feature__title'>{feature}</h3>
                        <p className='feature__index'>[00{index + 1}]</p>
                    </button>
                ))}
            </div>
        </section>
    )
}

