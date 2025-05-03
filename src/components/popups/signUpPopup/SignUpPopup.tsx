import './SignUpPopup.scss';
import Button from '../../button/Button';

interface ISignUpPopupProps {
  isPopupOpen: boolean
  onOverlayClick: (e: React.MouseEvent<HTMLDivElement>) => void
  setIsPopupOpen: (value: boolean) => void
}

const SignUpPopup: React.FC<ISignUpPopupProps> = ({ isPopupOpen, onOverlayClick, setIsPopupOpen }) => {

  return (
    <div className={`signUp ${isPopupOpen ? 'signUp--open' : ''}`} onClick={onOverlayClick}>
      <div className="signUp__inner">
        <h3 className="signUp__title">
          Sign Up
        </h3>
        <button className="signUp__close" onClick={() => setIsPopupOpen(false)}></button>
        <form action="" className="signUp__form">
          <label htmlFor="">
            Login
          </label>
          <input type="email" className="signUp__input" required />
          <label htmlFor="">
            Password
          </label>
          <input type="text" className="signUp__input" required />
          <div>
            <Button type="primary" htmlType="submit" text="Log In" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUpPopup;