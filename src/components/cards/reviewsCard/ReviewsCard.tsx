import './ReviewsCard.scss';
import StarRating from '../../starRating/StarRating';
import { IReviews } from '../../../assets/data/reviews';

interface IReviewsCardProps {
  data: IReviews
}

const ReviewsCard: React.FC<IReviewsCardProps> = ({ data }) => {

  return (
    <li className="reviewsCard">
      <StarRating rating={data.rating}/>
      <h3 className="reviewsCard__title">{data.name}</h3>
      <p className="reviewsCard__text">{data.text}</p>
      <span className="reviewsCard__date">{data.date}</span>
    </li>
  )
}

export default ReviewsCard;