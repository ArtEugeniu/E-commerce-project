import './CartSection.scss';
import CartItemsList from "../../../components/cartPage/cartItemsList/CartItemsList";
import CartCalculatorContainer from '../../../containers/cartPage/CartCalculatorContainer';


const CartSection: React.FC = () => {

  return (
    <section className="cartSection">
      <div className="container">
        <div className="cartSection__inner">
          <CartItemsList />
          <CartCalculatorContainer />
        </div>
      </div>
    </section>
  )
}

export default CartSection;