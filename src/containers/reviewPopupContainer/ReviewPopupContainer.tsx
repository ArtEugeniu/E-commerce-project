import StarRating from '../../components/starRating/StarRating';
import ReviewPopup from '../../components/popups/reviewPopup/ReviewPopup';
import Button from '../../components/button/Button';
import { useState, useRef, useEffect } from 'react';
import { v4 } from 'uuid';
import './ReviewPopupContainer.scss';

interface IReviewData {
  id: string
  name: string
  text: string
  rating: number
  date: string
}

const initialState = {
  id: '',
  rating: 0,
  name: '',
  text: '',
  date: ''
}

interface IReviewPopupContainerProps {
  onAddReview: (data: IReviewData) => void
  isOpen: boolean
  onTogglePopup: () => void
}

const ReviewPopupContainer: React.FC<IReviewPopupContainerProps> = ({ onAddReview, isOpen, onTogglePopup }) => {
  const [reviewData, setReviewData] = useState<IReviewData>(initialState);

  const popup = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const popupEl = popup.current;
    if (!popupEl) return;

    if (!isOpen) {
      document.body.classList.remove('popup-open');
      popupEl.style.transform = 'translateX(-200%)';
    } else {
      document.body.classList.add('popup-open');
      popupEl.style.transform = 'translateY(0)';
    }
  }, [isOpen])




  const handleRating = (value: number) => {
    setReviewData(prev => {
      return (
        {
          ...prev,
          rating: value
        }
      )
    });
  }

  const handleInputs = (value: string, name: string) => {
    setReviewData(prev => {
      return (
        {
          ...prev,
          [name]: value
        }
      )
    })
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReview = {
      ...reviewData, id: v4(), date: `Posted on ${new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}`
    }
    onAddReview(newReview)
    setReviewData(initialState);
    onTogglePopup()
  }

  const onOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement
    if (e.target === e.currentTarget || target.classList.contains('reviewPopup__close')) {
      onTogglePopup()
      setReviewData(initialState);
    }
  }

  return (
    <div className='reviewPopup-overlay' ref={popup} onClick={onOverlayClick}>
      <div className="reviewPopup">
        <button className="reviewPopup__close"></button>
        <form className="reviewPopup__form" action="" onSubmit={onSubmit}>
          <ReviewPopup onValueChange={handleInputs} nameValue={reviewData.name} textValue={reviewData.text} />
          <StarRating rating={reviewData.rating} editable={true} onRatingChange={handleRating} />
          <div>
            <Button text="Submit Review" type="primary" htmlType="submit" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default ReviewPopupContainer;