import './Home.scss';
import Header from '../../components/layout/header/Header';
import Hero from '../../components/home/hero/Hero';
import NewGoods from '../../components/home/newGoods/NewGoods';
import TopSelling from '../../components/home/topSelling/TopSelling';
import DressStyle from '../../components/home/dressStyle/DressStyle';
import Reviews from '../../components/home/reviews/Reviews';
import SubscribeForm from '../../components/forms/subscribeForm/SubscribeForm';
import Footer from '../../components/layout/footer/Footer';
import LogInPopup from '../../components/popups/logInPopup/LogInPopup';
import SignUpPopup from '../../components/popups/signUpPopup/SignUpPopup';
import { useRef, useState, useEffect } from 'react';

const Home: React.FC = () => {

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
      <SignUpPopup isPopupOpen={isPopupOpen} onOverlayClick={handleOverlayClick} setIsPopupOpen={setIsPopupOpen}/>
      <Header onSubscribeClick={() => subscribeRef.current?.scrollIntoView({ behavior: 'smooth' })} onLogClick={handleLogIn} />
      <Hero />
      <NewGoods />
      <TopSelling />
      <DressStyle />
      <Reviews />
      <div className="subscription-form" ref={subscribeRef}>
        <SubscribeForm />
      </div>
      <Footer />
    </>
  )
}

export default Home;