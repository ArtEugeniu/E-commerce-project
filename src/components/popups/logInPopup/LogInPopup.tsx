import './LogInPopup.scss';
import Button from '../../button/Button';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../services/firebaseConfig';
import { useAppDispatch } from '../../../hooks/rtkHooks';
import { setUser } from '../../../store/authSlice';

interface ILogInPopupProps {
  isPopupOpen: boolean;
  setIsPopupOpen: (value: boolean) => void;
  onOverlayClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const LogInPopup: React.FC<ILogInPopupProps> = ({ isPopupOpen, setIsPopupOpen, onOverlayClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();

  const handleLogIn = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('work')
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User logged in:', user);
      dispatch(setUser({ email: user.email, uid: user.uid }))
      setIsPopupOpen(false);
    } catch (error: any) {
      console.error('Login error:', error.message);
      alert(error.message);
    }
  };

  return (
    <div className={`logIn ${isPopupOpen ? 'logIn--open' : ''}`} onClick={onOverlayClick}>
      <div className="logIn__inner" onClick={(e) => e.stopPropagation()}>
        <h3 className="logIn__title">Log In</h3>
        <button className="logIn__close" onClick={() => setIsPopupOpen(false)}></button>
        <form className="logIn__form" onSubmit={handleLogIn}>
          <label htmlFor="login-email">Login</label>
          <input
            id="login-email"
            type="email"
            className="logIn__input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            type="password"
            className="logIn__input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div>
            <Button type="primary" htmlType="submit" text="Log In" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogInPopup;