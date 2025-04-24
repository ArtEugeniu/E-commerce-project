import './Reviews.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ReviewsCard from '../../cards/reviewsCard/ReviewsCard';
import { reviews } from '../../../assets/data/reviews';

const Reviews: React.FC = () => {

  return (
    <section className="reviews section">
      <div className="container">
        <h2 className="reviews__title section-title">
          Our Happy Customers
        </h2>
        <div className='swiper-container'>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={15}
          slidesPerView={2}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }}>
          <ul className="reviews__list">
            {reviews.map(item => <SwiperSlide key={item.id}> <ReviewsCard data={item} /> </SwiperSlide>)}
          </ul>
        </Swiper>

      </div>
    </section>
  )
}

export default Reviews;