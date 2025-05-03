import './SignUpPopup.scss';
import Button from '../../button/Button';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../services/firebaseConfig';
import { useState } from 'react';

interface ISignUpPopupProps {
  isPopupOpen: boolean
  onOverlayClick: (e: React.MouseEvent<HTMLDivElement>) => void
  setIsPopupOpen: (value: boolean) => void
}

const SignUpPopup: React.FC<ISignUpPopupProps> = ({ isPopupOpen, onOverlayClick, setIsPopupOpen }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User registered:', user);
      setIsPopupOpen(false); 
    } catch (error: any) {
      console.error('Registration error:', error.message);
      alert(error.message); 
    }
  };

  return (
    <div className={`signUp ${isPopupOpen ? 'signUp--open' : ''}`} onClick={onOverlayClick}>
      <div className="signUp__inner" onClick={(e) => e.stopPropagation()}>
        <h3 className="signUp__title">Sign Up</h3>
        <button className="signUp__close" onClick={() => setIsPopupOpen(false)}></button>
        <form className="signUp__form" onSubmit={handleSignUp}>
          <label htmlFor="signup-email">Login</label>
          <input
            id="signup-email"
            type="email"
            className="signUp__input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="signup-password">Password</label>
          <input
            id="signup-password"
            type="password"
            className="signUp__input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div>
            <Button type="primary" htmlType="submit" text="Sign Up" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPopup;