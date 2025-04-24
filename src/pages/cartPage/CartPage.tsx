import Header from "../../components/layout/header/Header";
import BreadCrumbs from "../../components/layout/breadCrumbs/BreadCrumbs";
import CartSection from "../../components/cartPage/cartSection/CartSection";
import SubscribeForm from "../../components/forms/subscribeForm/SubscribeForm";
import Footer from "../../components/layout/footer/Footer";

const CartPage: React.FC = () => {

  return (
    <>
      <Header />
      <BreadCrumbs />
      <CartSection />
      <div className="subscription-form">
        <SubscribeForm />
      </div>
      <Footer />
    </>
  )
}

export default CartPage;