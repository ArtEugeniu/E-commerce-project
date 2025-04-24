import Header from "../../components/layout/header/Header";
import BreadCrumbs from "../../components/layout/breadCrumbs/BreadCrumbs";
import GoodsCategorySection from "../../containers/categoryPageContainer/goodsCategorySection/GoodsCategorySection";
import SubscribeForm from "../../components/forms/subscribeForm/SubscribeForm";
import Footer from "../../components/layout/footer/Footer";

const CategoryPage: React.FC = () => {

  return (
    <>
      <Header />
      <BreadCrumbs />
      <GoodsCategorySection />
      <div className="subscription-form">
        <SubscribeForm />
      </div>
      <Footer />
    </>
  )
}

export default CategoryPage;