import './TestimonialsTop.scss';
import Button from '../../../button/Button';
import SelectComponent from '../../../select/Select';
import { IOption } from '../../../select/Select';

const Testimonials: React.FC<{ reviewsNumber: number, onTogglePopup: () => void }> = ({ reviewsNumber, onTogglePopup }) => {

  const options: IOption[] = [
    { value: 'latest', label: 'Latest' },
    { value: 'oldest', label: 'Oldest' },
  ]

  return (
    <div className="testimonials__top">
      <h4 className="testimonials__top-title">All Reviews <span>({reviewsNumber})</span></h4>
      <div className="testimonials__top-buttons">
        <SelectComponent options={options} />
        <Button text="Write a Review" type="secondary" htmlType="button" onClick={onTogglePopup} />
      </div>
    </div>
  )
}

export default Testimonials;