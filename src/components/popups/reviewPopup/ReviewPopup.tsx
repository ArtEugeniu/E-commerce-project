import './ReviewPopup.scss';

interface IReviewPopupProps {
  onValueChange: (value: string, name: string) => void
  nameValue: string
  textValue: string
}

const ReviewPopup: React.FC<IReviewPopupProps> = ({ onValueChange, nameValue, textValue }) => {

  return (
    <>
      <label className="reviewPopup__label" htmlFor="popupName">
        Your name:
        <input className="reviewPopup__input" type="text" name="name" id="popupName" value={nameValue} onChange={(e) => onValueChange(e.target.value, e.target.name)} required />
      </label>
      <label className="reviewPopup__label" htmlFor="popupText">
        Writhe review:
        <textarea className="reviewPopup__input reviewPopup__text" name="text" id="popupText" value={textValue} onChange={(e) => onValueChange(e.target.value, e.target.name)} required ></textarea>
      </label>
    </>
  )
}

export default ReviewPopup;