import { Rating, Star } from '@smastrom/react-rating';


interface StarRatingProps {
  rating: number
  editable?: boolean
  onRatingChange?: (value: number) => void
}

const StarRating: React.FC<StarRatingProps> = ({ rating, editable, onRatingChange }) => {

  const styles = {
    itemShapes: Star,
    activeFillColor: '#facc15',
    inactiveFillColor: '#d1d5db'
  }


  return (
    <Rating
      style={{ maxWidth: 100 }}
      itemStyles={styles}
      value={rating}
      onChange={editable ? onRatingChange : undefined}
      readOnly={!editable} />
  )
}

export default StarRating;