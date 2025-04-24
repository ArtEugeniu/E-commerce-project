import './RecommendedProducts.scss';
import { IProduct } from '../../../services/productsApi';
import GoodsCard from '../../cards/goodsCard/GoodsCard';
import { useNavigateToProduct } from '../../../hooks/useNavigateToProduct';
import Button from '../../button/Button';

interface IRecommendedProductsProps {
  recommendedList: IProduct[]
  onShowMore: () => void
  itemsToShow: number
}

const RecommendedProducts: React.FC<IRecommendedProductsProps> = ({ recommendedList, onShowMore, itemsToShow }) => {
  const navigateToProduct = useNavigateToProduct();

  return (
    <section className="recommended section">
      <div className="container">
        <h2 className="recommended__title section-title">You might also like</h2>
        <ul className="recommended__list">
          {recommendedList.slice(0, itemsToShow).map(item => <GoodsCard key={item.id} data={item} onProductClick={navigateToProduct} />)}
        </ul>
        <div className="recommended__button">
          <Button
            text="Show More"
            type="primary"
            htmlType="button"
            onClick={onShowMore}
            className={recommendedList.length <= itemsToShow ? 'dissabled' : ''}
          />
        </div>
      </div>
    </section>
  )
}

export default RecommendedProducts;