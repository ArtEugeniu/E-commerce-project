import './TopSelling.scss';
import GoodsCard from "../../cards/goodsCard/GoodsCard";
import Button from '../../button/Button';
import { useGetGoodsWomenQuery } from '../../../services/productsApi';
import { IProduct } from '../../../services/productsApi';
import { useNavigateToProduct } from '../../../hooks/useNavigateToProduct';
import { useNavigate } from 'react-router-dom';

const TopSelling: React.FC = () => {

  const { data, isLoading, error } = useGetGoodsWomenQuery();
  const navigateToProduct = useNavigateToProduct();
  const navigateToCategory = useNavigate();

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error</div>
  }

  const handleViewAll = () => {
    navigateToCategory('/category?category=Women')
  }

  return (
    <section className="topSelling section">
      <div className="container">
        <h2 className="topSelling__title section-title">Top Sellings</h2>
        <ul className="topSelling__list">
          {data?.products.slice(8, 12).map((item: IProduct) => <GoodsCard key={item.id} data={item} onProductClick={navigateToProduct} />)}
        </ul>
        <Button type='primary' text='View All' className="newGoods__button" htmlType="button" onClick={handleViewAll}/>
      </div>
    </section>
  )
}

export default TopSelling;