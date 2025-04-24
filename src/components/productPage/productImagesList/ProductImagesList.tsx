import './ProductImagesList.scss';
import { IProduct } from '../../../services/productsApi';

interface IProductImagesProps {
  selectedProduct: IProduct
  onChooseImage: (url: string, index: number) => void
  currentImage: number
}

const ProductImages: React.FC<IProductImagesProps> = ({ selectedProduct, onChooseImage, currentImage }) => {

  return (
    <ul className="details__images-list">
      {selectedProduct?.additionalImageUrls?.slice(0, 3).map((item, index) => {
        const isActive: boolean = currentImage === index;
        return (
          <li className="details__images-item" key={index + item} >
            <img className={`details__img ${isActive ? 'details__active-img' : ''}`} src={`https://${item}`} alt="product image" onClick={() => onChooseImage(item, index)}/>
          </li>
        )
      })}
    </ul>
  )
}

export default ProductImages;