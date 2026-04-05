import './presentation.scss';

export default function Presentation() {
    return(
        <section className='presentation'>
            <h2>Title</h2>
            <div className='presentation__wrapper'>
                <img className='presentation__image' src="/src/assets/images/silhouette.jpg" alt="" />
                <div className='presentation__content'>
                    <div>
                        <p className='presentation__content-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed dolorem corrupti consequuntur similique velit, quisquam delectus, eveniet sint ad quia pariatur nihil vero, expedita voluptatem neque a dicta. Nemo, maiores?</p>
                        <p className='presentation__content-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat consectetur pariatur exercitationem ipsum hic! Ratione, maxime quis? Fuga, cupiditate ex distinctio alias atque explicabo quam sint iusto dolore obcaecati culpa.</p>
                    </div>
                    <div className='presentation__content-wrapper'>
                        <p className='presentation__content-subtitle'>exemple:</p>
                        <ul className='presentation__list'>
                            <li className='presentation__list-item'>exemple</li>
                            <li className='presentation__list-item'>exemple</li>
                            <li className='presentation__list-item'>exemple</li>
                            <li className='presentation__list-item'>exemple</li>
                        </ul>
                    </div>
                    <div className='presentation__content-wrapper'>
                        <p className='presentation__content-subtitle'>exemple:</p>
                        <ul className='presentation__list'>
                            <li className='presentation__list-item'>exemple</li>
                            <li className='presentation__list-item'>exemple</li>
                            <li className='presentation__list-item'>exemple</li>
                            <li className='presentation__list-item'>exemple</li>
                        </ul>
                    </div>
                    <div className='presentation__content-wrapper'>
                        <p className='presentation__content-subtitle'>exemple:</p>
                        <ul className='presentation__list'>
                            <li className='presentation__list-item'>exemple</li>
                            <li className='presentation__list-item'>exemple</li>
                            <li className='presentation__list-item'>exemple</li>
                            <li className='presentation__list-item'>exemple</li>
                        </ul>
                    </div>
                    <div className='presentation__content-wrapper'>
                        <p className='presentation__content-subtitle'>Social:</p>
                        <ul className='presentation__list'>
                            <li className='presentation__list-item'><a target='_blank' href="https://www.github.com">github</a></li>
                            <li className='presentation__list-item'><a target='_blank' href="https://www.linkedin.com">linkedin</a></li>
                        </ul>
                    </div>
                    <div className='presentation__content-wrapper'>
                        <p className='presentation__content-subtitle'>CV:</p>
                        <ul className='presentation__list'>
                            <li className='presentation__list-item'><a target='_blank' href="https://www.github.com">Download</a></li>
                        </ul>
                    </div>
                    <div className='presentation__content-wrapper'>
                        <p className='presentation__content-subtitle'>Contact:</p>
                        <ul className='presentation__list'>
                            <li className='presentation__list-item'>+336 00 00 00 00</li>
                            <li className='presentation__list-item'>exemple@exemple.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}