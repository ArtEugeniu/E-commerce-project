import CartCalculator from "../../components/cartPage/cartCalculator/CartCalculator";
import { useAppSelector } from "../../hooks/rtkHooks";

export interface ICalculatorData {
  Subtotal: string
  [key: string]: string
  'Delivery Fee' : string
}

const CartCalculatorContainer = () => {

  const cartItems = useAppSelector(store => store.cart);
  const discount = 50;
  const deliveryPrice = '25';

  const subtotal: number = cartItems.reduce((acc, item) => item.price * item.quantity + acc, 0);
  const discountAmount = (subtotal * (discount / 100)).toFixed(2);
  const total = (subtotal + Number(deliveryPrice) - Number(discountAmount)).toFixed(2);

  const calculatedData: ICalculatorData = {
    Subtotal: subtotal.toFixed(2),
    [`Discount (-${discount}%)`]: discountAmount,
    'Delivery Fee': deliveryPrice,
  }

  return (
    <CartCalculator data={calculatedData} result={total} />
  )
}

export default CartCalculatorContainer;