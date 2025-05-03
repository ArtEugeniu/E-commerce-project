import Header from "../../components/layout/header/Header";
import BreadCrumbs from "../../components/layout/breadCrumbs/BreadCrumbs";
import ProductDetailsContainer from "../../containers/productDetailsContainer/ProductDetailsContainer";
import TestimonialsContainer from "../../containers/testimonialsContainer/TestimonialsContainer";
import RecommendedProductsContainer from "../../containers/recommendedProductsContainer/RecommendedProductsContainer";
import SubscribeForm from "../../components/forms/subscribeForm/SubscribeForm";
import Footer from "../../components/layout/footer/Footer";
import LogInPopup from "../../components/popups/logInPopup/LogInPopup";
import SignUpPopup from "../../components/popups/signUpPopup/SignUpPopup";
import { useRef, useState, useEffect } from 'react';


const ProductPage: React.FC = () => {

  const [isLogInOpen, setIsLogInOpen] = useState<boolean>(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState<boolean>(false);

  const subscribeRef = useRef<HTMLDivElement>(null);

  const handleLogIn = () => {
    setIsLogInOpen(prev => !prev)
  }

  const handleSignUp = () => {
    setIsSignUpOpen(prev => !prev)
  }

  useEffect(() => {
    if (isLogInOpen || isSignUpOpen) {
      document.body.classList.add('popup-open')
    } else {
      document.body.classList.remove('popup-open')
    }
  }, [isLogInOpen, isSignUpOpen])

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsLogInOpen(false);
      setIsSignUpOpen(false);
    }
  }


  return (
    <>
      <LogInPopup isPopupOpen={isLogInOpen} setIsPopupOpen={setIsLogInOpen} onOverlayClick={handleOverlayClick} />
      <SignUpPopup isPopupOpen={isSignUpOpen} onOverlayClick={handleOverlayClick} setIsPopupOpen={setIsSignUpOpen}/>
      <Header onSubscribeClick={() => subscribeRef.current?.scrollIntoView({ behavior: 'smooth' })} onLogClick={handleLogIn} onSignClick={handleSignUp}/>
      <BreadCrumbs />
      <ProductDetailsContainer />
      <TestimonialsContainer />
      <RecommendedProductsContainer />
      <div className="subscription-form" ref={subscribeRef}>
        <SubscribeForm />
      </div>
      <Footer />
    </>
  )
}

export default ProductPage;