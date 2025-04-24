import './CartCalculator.scss';
import Button from '../../button/Button';
import { ICalculatorData } from '../../../containers/cartPage/CartCalculatorContainer';

interface ICartCalculatorProps {
  data: ICalculatorData
  result: string
}

const CartCalculator: React.FC<ICartCalculatorProps> = ({ data, result }) => {

  const calculatorTitles = Object.keys(data) as (keyof ICalculatorData)[];

  return (
    <div className="cartCalculator">
      <h3 className="cartCalculator__title">Order Summary</h3>
      <ul className="cartCalculator__list">
        {calculatorTitles.map(item => {
          return (
            <li className="cartCalculator__item" key={item}>
              <h4 className="cartCalculator__item-title">{item}</h4>
              <span className="cartCalculator__item-price">${data[item]}</span>
            </li>
          )
        })}

      </ul>
      <div className="cartCalculator__result">
        <h4 className="cartCalculator__result-title">Total</h4>
        <span className="cartCalculator__result-price">${result}</span>
      </div>

      <div className="cartCalculator__form">
        <form action="">
          <label htmlFor="">
            <input type="text" placeholder="Add promo code"/>
          </label>
          <Button type="secondary" text="Apply" htmlType="submit" className="promoCode"/>
        </form>
      </div>
      <div className="cartCalculator__confirm">
        <Button text="Go to Checkout" type="secondary" htmlType="button" />
      </div>
    </div>
  )
}

export default CartCalculator;