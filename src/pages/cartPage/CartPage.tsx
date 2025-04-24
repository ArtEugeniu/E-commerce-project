import Header from "../../components/layout/header/Header";
import BreadCrumbs from "../../components/layout/breadCrumbs/BreadCrumbs";
import CartSection from "../../components/cartPage/cartSection/CartSection";
import SubscribeForm from "../../components/forms/subscribeForm/SubscribeForm";
import Footer from "../../components/layout/footer/Footer";
import { useRef } from 'react';

const CartPage: React.FC = () => {

  const subscribeRef = useRef<HTMLDivElement>(null);
  
  return (
    <>
      <Header onSubscribeClick={() => subscribeRef.current?.scrollIntoView({ behavior: 'smooth' })} />
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