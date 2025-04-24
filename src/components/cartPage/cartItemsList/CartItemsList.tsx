import './CartItemsList.scss';
import CartProductCard from '../../cards/cartProductCard/CartProductCard';
import { useAppSelector, useAppDispatch } from '../../../hooks/rtkHooks';
import { deleteItem, increment, decrement } from '../../../store/cartSlice';


const CartItemsList: React.FC = () => {

  const cartItems = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();

  const handleDeleteButton = (id: number) => {
    dispatch(deleteItem(id))
  }

  const handleQuantityButtons = (type: string, id: number) => {
    if (type === 'decrement') {
      dispatch(decrement(id))
    } 
    if(type === 'increment') {
      dispatch(increment(id))
    }
  }

  return (
    <ul className="cartList">
      {cartItems.map(item => <CartProductCard data={item} key={item.id} onDeleteButton={handleDeleteButton} onChangeQuantity={handleQuantityButtons} />)}
    </ul>
  )
}

export default CartItemsList;