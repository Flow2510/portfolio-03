import MaskReveal from '../maskreveal/maskreveal';
import './featurelist.scss';

export default function FeatureList({item, title, list, link}){
    return(
        <div className='feature-list'>
            <h4 className='feature-list__title'>
                <MaskReveal 
                    text={title}
                    backgroundColor={"#151515"}
                    delay={0}
                />
            </h4>
            <ul className='feature-list__list'>
                {list ? 
                    item.map((feature, index) => (
                        <li 
                            className='feature-list__item'
                            key={feature + index}
                        > 
                            {feature}
                        </li>
                    ))
                :
                    <li>
                        {link ? 
                            <a href="">
                                {item}
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        :
                            item
                        }
                    </li>
                }
            </ul>
        </div>
    )
}