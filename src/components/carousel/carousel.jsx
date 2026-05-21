import './carousel.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { NavLink } from 'react-router-dom';

export default function Carousel({ projects }){

    return(
        <Swiper 
            className='carousel'
            loop={true}
            pagination={{
                dynamicBullets: true,
            }}
            navigation={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
        >
            {projects.map((project, index) => (
                <SwiperSlide
                    className='carousel__item'
                    key={project.id + index}
                >
                    <NavLink
                        to={`/${project.id}`}
                    >
                        <img 
                            className='carousel__item-image'
                            loading='lazy'
                            src={project.image} 
                            alt={project.alt} 
                        />
                    </NavLink>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}