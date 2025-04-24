import ReviewsCard from "../../../cards/reviewsCard/ReviewsCard";
import { IReviews } from "../../../../assets/data/reviews";
import Button from "../../../button/Button";
import './TestimonialsBottom.scss';

interface TestimonialsBottomProps {
  reviews: IReviews[]
  showReviews: number
  onShowReviews: () => void
}

const TestimonialsBottom: React.FC<TestimonialsBottomProps> = ({ reviews, showReviews, onShowReviews }) => {

  return (
    <div className="testimonials__bottom">
      <ul className="testimonials__bottom-list">
        {reviews.slice(0, showReviews).map(item => {
          return (
            <ReviewsCard data={item} key={item.id} />
          )
        })}
      </ul>
      <div className="testimonials__bottom-button">
        <Button
          text="Load More Reviews"
          type="primary"
          htmlType="button"
          onClick={onShowReviews}
          className={reviews.length <= showReviews ? 'dissabled' : ''}
        />
      </div>
    </div>
  )
}

export default TestimonialsBottom;