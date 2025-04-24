import './ProductQuantity.scss';

interface IProductQuantityProps {
  quantity: number
  setQuantity: (value: number) => void
}

const ProductQuantity: React.FC<IProductQuantityProps> = ({ quantity, setQuantity }) => {

  const increment = () => {
    setQuantity(quantity + 1)
  }

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className="quantity__controls">
      <button className="quantity__decrement quantity__button" onClick={decrement}>-</button>
      <span>{quantity}</span>
      <button className="quantity__increment quantity__button" onClick={increment}>+</button>
    </div>
  )
}

export default ProductQuantity;