import { useLocation } from 'react-router-dom';
import { useAllProducts } from '../../hooks/useAllProducts';
import { useState, useEffect } from 'react';
import ProductImages from '../../components/productPage/productImagesList/ProductImagesList';
import SelectedImage from '../../components/productPage/selectedImage/SelectedImage';
import ProductDetails from '../../components/productPage/productDetails/ProductDetails';
import './ProductDetailsContainer.scss';

const ProductDetailsContainer: React.FC = () => {

  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(item => item);
  const productId = Number(pathnames[pathnames.length - 1]);
  const allProducts = useAllProducts();

  const selectedProduct = allProducts?.find(item => item.id === productId);

  const [selectedImage, setSelectedImage] = useState<string>('');
  const [indexImage, setIndexImage] = useState<number>(0);
  const [selectedSize, setSelectedSize] = useState<string>('Medium');

  useEffect(() => {
    setSelectedImage(`https://${selectedProduct?.additionalImageUrls[0]}`)
  }, [selectedProduct])


  const handleChooseImage = (url: string, index: number) => {
    setSelectedImage('https://' + url);
    setIndexImage(index);
  }

  const handleSelectedSize = (size: string) => {
    setSelectedSize(size)
  }

  if(!selectedProduct) return null;

  return (
    <section className="details section">
      <div className="container">
        <div className="details__inner">
          <ProductImages selectedProduct={selectedProduct} onChooseImage={handleChooseImage} currentImage={indexImage} />
          <SelectedImage selectedImage={selectedImage} />
          <ProductDetails selectedProduct={selectedProduct} onSelectSize={handleSelectedSize} currentSize={selectedSize}/>
        </div>
      </div>
    </section>
  )
}

export default ProductDetailsContainer;