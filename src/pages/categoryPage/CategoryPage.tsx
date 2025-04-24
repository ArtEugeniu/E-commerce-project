import Header from "../../components/layout/header/Header";
import BreadCrumbs from "../../components/layout/breadCrumbs/BreadCrumbs";
import GoodsCategorySection from "../../containers/categoryPageContainer/goodsCategorySection/GoodsCategorySection";
import SubscribeForm from "../../components/forms/subscribeForm/SubscribeForm";
import Footer from "../../components/layout/footer/Footer";
import { useRef } from 'react';

const CategoryPage: React.FC = () => {

  const subscribeRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Header onSubscribeClick={() => subscribeRef.current?.scrollIntoView({ behavior: 'smooth' })} />
      <BreadCrumbs />
      <GoodsCategorySection />
      <div className="subscription-form" ref={subscribeRef}>
        <SubscribeForm />
      </div>
      <Footer />
    </>
  )
}

export default CategoryPage;