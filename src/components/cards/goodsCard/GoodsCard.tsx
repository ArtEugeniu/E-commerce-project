import './GoodsCard.scss';
import { IProduct } from '../../../services/productsApi';
import { useMemo } from 'react';
import StarRating from '../../starRating/StarRating';


interface IGoodsCardProps {
  data: IProduct
  onProductClick: (id: number) => void
}

const GoodsCard: React.FC<IGoodsCardProps> = ({ data, onProductClick }) => {


  const itemRating = useMemo((): number => {
    const base = Math.floor(Math.random() * 3) + 3;
    const isHalf = Math.random() > 0.5;
    return isHalf && base < 5 ? base + 0.5 : base;
  }, []);


  return (
    <li className="goodsCard">
      <div className="goodsCard__image" onClick={() => onProductClick(data.id)}>
        <img src={`https://${data.imageUrl}`} alt="productImage" />
      </div>
      <h3 className="goodsCard__title" onClick={() => onProductClick(data.id)} >{data.name}</h3>
      <div className="goodsCard__rating">
        {itemRating}/5
        <StarRating rating={itemRating} />
      </div>
      <div className="goodsCard__price">${data.price.current.value}</div>
    </li>
  )
}

export default GoodsCard;