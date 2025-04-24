import Header from "../../components/layout/header/Header";
import BreadCrumbs from "../../components/layout/breadCrumbs/BreadCrumbs";
import ProductDetailsContainer from "../../containers/productDetailsContainer/ProductDetailsContainer";
import TestimonialsContainer from "../../containers/testimonialsContainer/TestimonialsContainer";
import RecommendedProductsContainer from "../../containers/recommendedProductsContainer/RecommendedProductsContainer";
import SubscribeForm from "../../components/forms/subscribeForm/SubscribeForm";
import Footer from "../../components/layout/footer/Footer";
import { useRef } from 'react';


const ProductPage: React.FC = () => {
  const subscribeRef = useRef<HTMLDivElement>(null);


  return (
    <>
      <Header onSubscribeClick={() => subscribeRef.current?.scrollIntoView({ behavior: 'smooth' })}/>
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