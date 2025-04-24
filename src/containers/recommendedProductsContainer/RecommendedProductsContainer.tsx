import RecommendedProducts from "../../components/productPage/recommendedProducts/RecommendedProducts";
import { useLocation } from "react-router-dom";
import { useAllProducts } from "../../hooks/useAllProducts";
import { useState } from 'react';

const RecommendedProductsContainer: React.FC = () => {

  const [showItems, setShowItems] = useState<number>(4);

  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(item => item);
  const itemId = pathnames[pathnames.length - 1];
  const allProducts = useAllProducts();
  const itemIndex = allProducts.findIndex(item => Number(itemId) === item.id);

  const recommendedList = allProducts.slice(itemIndex + 1, itemIndex + 13);

  const handleShowMore = () => {
    if (showItems < 12) {
      setShowItems(prev => prev + 4)
    }
  }

  return (
    <RecommendedProducts recommendedList={recommendedList} onShowMore={handleShowMore} itemsToShow={showItems} />
  )
}

export default RecommendedProductsContainer;