import FadeInText from '../fadeintext/fadeintext'
import './info.scss'

export default function Info() {
    const data = [
        {
            text: "email@exemple.fr",
            id: "e"
        },
        {
            text: "+336 66 66 66 66",
            id: "m"
        },
        {
            text: "France",
            id: "l"
        }
    ]
    return(
        <section className='info'>
            <div className='info__wrapper'>
                <div className='info__content'>
                    <h2 className='info__content-title'>
                        <FadeInText text={'Info :'}/>
                    </h2>
                </div>
                <div className='info__list'>
                    {data.map((d, index) => (
                        <div className='info__item' key={d.id + index}>
                            <div className='info__item-overlay'></div>
                            <h3 className='info__item-title'><span className='info__item-id'>[{d.id}]</span> <FadeInText text={d.text}/></h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}