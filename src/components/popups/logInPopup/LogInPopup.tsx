import './LogInPopup.scss';
import Button from '../../button/Button';

interface ILogInPopupProps {
  isPopupOpen: boolean
  setIsPopupOpen: (value: boolean) => void
  onOverlayClick: (e: React.MouseEvent<HTMLDivElement>) => void
}

const LogInPopup: React.FC<ILogInPopupProps> = ({ isPopupOpen, setIsPopupOpen, onOverlayClick }) => {

  return (
    <div className={`logIn ${isPopupOpen ? 'logIn--open' : ''}`} onClick={onOverlayClick}>
      <div className="logIn__inner">
        <h3 className="logIn__title">
          Log In
        </h3>
        <button className="logIn__close" onClick={() => setIsPopupOpen(false)}></button>
        <form action="" className="logIn__form">
          <label htmlFor="">
            Login
          </label>
          <input type="email" className="logIn__input" required/>
          <label htmlFor="">
            Password
          </label>
          <input type="text" className="logIn__input" required/>
          <div>
            <Button type="primary" htmlType="submit" text="Log In" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default LogInPopup;