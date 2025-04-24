import './Home.scss';
import Header from '../../components/layout/header/Header';
import Hero from '../../components/home/hero/Hero';
import NewGoods from '../../components/home/newGoods/NewGoods';
import TopSelling from '../../components/home/topSelling/TopSelling';
import DressStyle from '../../components/home/dressStyle/DressStyle';
import Reviews from '../../components/home/reviews/Reviews';
import SubscribeForm from '../../components/forms/subscribeForm/SubscribeForm';
import Footer from '../../components/layout/footer/Footer';
import { useRef } from 'react';

const Home: React.FC = () => {

  const subscribeRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Header onSubscribeClick={() => subscribeRef.current?.scrollIntoView({ behavior: 'smooth' })} />
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