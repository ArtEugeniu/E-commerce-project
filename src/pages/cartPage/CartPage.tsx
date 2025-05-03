import Header from "../../components/layout/header/Header";
import BreadCrumbs from "../../components/layout/breadCrumbs/BreadCrumbs";
import CartSection from "../../components/cartPage/cartSection/CartSection";
import SubscribeForm from "../../components/forms/subscribeForm/SubscribeForm";
import Footer from "../../components/layout/footer/Footer";
import LogInPopup from "../../components/popups/logInPopup/LogInPopup";
import SignUpPopup from "../../components/popups/signUpPopup/SignUpPopup";
import { useRef, useState, useEffect } from 'react';

const CartPage: React.FC = () => {

  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const subscribeRef = useRef<HTMLDivElement>(null);

  const handleLogIn = () => {
    setIsPopupOpen(prev => !prev)
  }

  useEffect(() => {
    if (isPopupOpen) {
      document.body.classList.add('popup-open')
    } else {
      document.body.classList.remove('popup-open')
    }
  })

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsPopupOpen(false);
    }
  }

  return (
    <>
      <LogInPopup isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} onOverlayClick={handleOverlayClick} />
      <SignUpPopup isPopupOpen={isPopupOpen} onOverlayClick={handleOverlayClick} setIsPopupOpen={setIsPopupOpen} />
      <Header onSubscribeClick={() => subscribeRef.current?.scrollIntoView({ behavior: 'smooth' })} onLogClick={handleLogIn} />
      <BreadCrumbs />
      <CartSection />
      <div className="subscription-form" ref={subscribeRef}>
        <SubscribeForm />
      </div>
      <Footer />
    </>
  )
}

export default CartPage;