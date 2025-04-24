import './DressStyle.scss';
import StyleCard from '../../cards/styleCard/StyleCard';
import {
  useGetGoodsMenGymQuery,
  useGetGoodsMenQuery,
  useGetGoodsWomenGymQuery,
  useGetGoodsWomenQuery
} from "../../../services/productsApi";

const DressStyle: React.FC = () => {

  const { data: menData, isLoading: menLoading, isError: menError } = useGetGoodsMenQuery();
  const { data: womenData, isLoading: womenLoading, isError: womenError } = useGetGoodsWomenQuery();
  const { data: menGymData, isLoading: menGymLoading, isError: menGymError } = useGetGoodsMenGymQuery();
  const { data: womenGymData, isLoading: womenGymLoading, isError: womenGymError } = useGetGoodsWomenGymQuery();

  const isLoading = menLoading || womenLoading || menGymLoading || womenGymLoading;
  const isError = menError || womenError || menGymError || womenGymError;

  if (menLoading) {
    return <div>Loading...</div>
  }

  if (menError) {
    return <div>Error</div>
  }

  const stylesToShow = [
    { title: 'Men', image: menData?.products[23].imageUrl, id: menData?.products[23].id },
    { title: 'Women', image: womenData?.products[0].imageUrl, id: womenData?.products[0].id },
    { title: 'Men Gym', image: menGymData?.products[22].imageUrl, id: menGymData?.products[22].id },
    { title: 'Women Gym', image: womenGymData?.products[0].imageUrl, id: womenGymData?.products[0].id }
  ]

  return (
    <section className="dressStyle section">
      <div className="container">
        <div className="dressStyle__inner">
          <h2 className="dressStyle__title section-title">Browse By Dress Style</h2>
          <ul className="dressStyle__list">
            {stylesToShow.map(item => <StyleCard key={item.id} styleData={item} /> )}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default DressStyle;