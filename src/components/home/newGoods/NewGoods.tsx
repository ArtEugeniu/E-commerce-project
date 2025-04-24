import './NewGoods.scss';
import GoodsCard from '../../cards/goodsCard/GoodsCard';
import Button from '../../button/Button';
import { useGetGoodsMenQuery } from '../../../services/productsApi';
import { IProduct } from '../../../services/productsApi';
import { useNavigateToProduct } from '../../../hooks/useNavigateToProduct';
import { useNavigate } from 'react-router-dom';


const NewGoods: React.FC = () => {
  const { data: menData, isLoading: menLoading, error: menError } = useGetGoodsMenQuery();
  const navigateToProduct = useNavigateToProduct()
  const navigateToCategory = useNavigate();

  if (menLoading) {
    return <div>Loading...</div>
  }

  if (menError) {
    return <div>Error</div>
  }

  const handleViewAll = () => {
    navigateToCategory('/category?category=Men')
  }

  return (
    <section className="newGoods section">
      <div className="container">
        <h2 className="newGoods__title section-title">New Arrivals</h2>
        <ul className="newGoods__list">
          {menData?.products.slice(0, 4).map((item: IProduct) => <GoodsCard key={item.id} data={item} onProductClick={navigateToProduct} />)}
        </ul>
        <Button type='primary' text='View All' className="newGoods__button" htmlType="button" onClick={handleViewAll}/>
      </div>
    </section>
  )
}

export default NewGoods;