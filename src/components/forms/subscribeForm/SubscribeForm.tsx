import './SubscribeForm.scss';
import Button from '../../button/Button';

const SubscribeForm: React.FC = () => {

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className="subscription">
      <div className="container">
        <div className="subscription__container">
          <h2 className="subscription__title">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
          <form action="" onClick={handleSubmit}>
            <label htmlFor="email">
              <input className="subscription__input" type="email" name="email" id="email" placeholder="Enter your email address" />
            </label>
            <Button text="Subscribe to Newsletter" htmlType="submit" type="primary" className="button--subscription" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default SubscribeForm;


