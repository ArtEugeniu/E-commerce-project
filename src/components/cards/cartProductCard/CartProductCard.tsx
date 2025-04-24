import './CartProductCard.scss';
import { ICartItem } from '../../../store/cartSlice';
import { useNavigateToProduct } from '../../../hooks/useNavigateToProduct';


interface ICartProductCardProps {
  data: ICartItem
  onDeleteButton: (id: number) => void
  onChangeQuantity: (type: string, id: number) => void
}

const CartProductCard: React.FC<ICartProductCardProps> = ({ data, onDeleteButton, onChangeQuantity }) => {
const navigateToProduct = useNavigateToProduct()

  return (
    <li className="productCard">
      <div className="productCard__image">
        <img src={`https://${data.image}`} alt="" onClick={() => navigateToProduct(data.id)}/>
      </div>
      <div className="productCard__info">
        <h3 className="productCard__title">{data.name}</h3>
        <div className="productCard__size">Size: {data.size}</div>
        <div className="productCard__color">Color: {data.color.charAt(0).toUpperCase() + data.color.slice(1).toLocaleLowerCase()}</div>
        <div className="productCard__price">${data.price}</div>
      </div>
      <div className="productCard__buttons">
        <button className="productCard__delete" onClick={() => onDeleteButton(data.id)}></button>
        <div className="productCard__quantity">
          <button className="productCard__decrement productCard__button" onClick={() => onChangeQuantity('decrement', data.id)}>-</button>
          <span>{data.quantity}</span>
          <button className="productCard__increment productCard__button" onClick={() => onChangeQuantity('increment', data.id)}>+</button>
        </div>
      </div>
    </li>
  )
}

export default CartProductCard;