import TestimonialsTop from "../../components/productPage/testimonials/testimonialsTop/TestimonialsTop";
import TestimonialsBottom from "../../components/productPage/testimonials/testimonialsBottom/TestimonialsBottom";
import { reviews } from "../../assets/data/reviews";
import { useState } from 'react';
import { useSort } from "../../context/sortContext";
import { useSortetReviews } from "../../hooks/useSortedReviews";
import { IReviews } from "../../assets/data/reviews";
import ReviewPopupContainer from "../reviewPopupContainer/ReviewPopupContainer";


const TestimonialsContainer: React.FC = () => {
  const [showReviews, setShowReviews] = useState<number>(2);
  const [allReviews, setAllReviews] = useState<IReviews[]>(reviews);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const selectedOption = useSort();

  const handleShowReviews = () => {
    if (showReviews >= allReviews.length) return;
    setShowReviews(showReviews + 2);
  }

  const handleAddReview = (data: IReviews) => {
    setAllReviews(prev => {
      return (
        [
          ...prev,
          data
        ]
      )
    })
  }

  const handlePopup = () => {
    setIsOpen(prev => !prev)
  }

  const sortedReviews = useSortetReviews(selectedOption.selectedOption.value, allReviews);

  return (
    <section className="testimonials section">
      <div className="container">
        <h2 className="testimonials__title section-title">Rating & Reviews</h2>
        <TestimonialsTop reviewsNumber={allReviews.length} onTogglePopup={handlePopup}/>
        <TestimonialsBottom reviews={sortedReviews} showReviews={showReviews} onShowReviews={handleShowReviews} />
        <ReviewPopupContainer onAddReview={handleAddReview} onTogglePopup={handlePopup} isOpen={isOpen}/>
      </div>
    </section>
  )
}

export default TestimonialsContainer;