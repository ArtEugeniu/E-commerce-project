import './productDetails.scss';
import StarRating from '../../starRating/StarRating';
import { IProduct } from '../../../services/productsApi';
import ProductQuantity from '../productQuantity/ProductQuantity';
import Button from '../../button/Button';
import { useAppDispatch, useAppSelector } from '../../../hooks/rtkHooks';
import { addItem } from '../../../store/cartSlice';
import { useState } from 'react';


interface IProductDetailsProps {
  selectedProduct: IProduct
  onSelectSize: (size: string) => void
  currentSize: string
}

const sizes: string[] = ['Small', 'Medium', 'Large', 'X-Large'];

const ProductDetails: React.FC<IProductDetailsProps> = ({ selectedProduct, onSelectSize, currentSize }) => {

  const [quantity, setQuantity] = useState<number>(1);

  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({
      id: selectedProduct.id,
      name: selectedProduct.name,
      image: selectedProduct.imageUrl,
      size: currentSize,
      color: selectedProduct.colour,
      price: selectedProduct.price.current.value,
      quantity: quantity
    }))
  }

  return (
    <div className="productDetails">
      <div className="productDetails__info">
        <h3 className="productDetails__title">{selectedProduct.name}</h3>
        <div className="productDetails__rating">
          <StarRating rating={4} /> <span>4/5</span>
        </div>
        <div className="productDetails__price">${selectedProduct.price.current.value}</div>
        <p className="productDetails__brand">{selectedProduct.brandName}</p>
      </div>
      <div className="productDetails__color">
        <h4 className="productDetails__color-title">Disponible colors</h4>
        {selectedProduct.colour}
      </div>
      <div className="productDetails__size">
        <h4 className="productDetails__color-title">Choose size</h4>
        <ul className="productDetails__size-list">
          {sizes.map(item =>
            <li
              className={`productDetails__size-item ${currentSize === item ? 'productDetails__size-item--active' : ''}`}
              key={item}
              onClick={() => onSelectSize(item)}
            >
              {item}
            </li>
          )}
        </ul>
      </div>
      <div className="quantity">
        <ProductQuantity quantity={quantity} setQuantity={setQuantity} />
        <Button text="Add to Cart" htmlType="button" type="secondary" className="accept-quantity" onClick={handleAddToCart}/>
      </div>
    </div>
  )
}

export default ProductDetails;