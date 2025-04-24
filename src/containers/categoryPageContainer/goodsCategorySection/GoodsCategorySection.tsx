import './GoodsCategorySection.scss';
import FilterByCategoryContainer from '../filtresContainer/FilterByCategoryContainer';
import FilterByPrice from "../../../components/categoryPage/filtres/filterByPrice/FilterByPrice";
import FilterByColor from "../../../components/categoryPage/filtres/filterByColor/FilterByColor";
import FilterBySize from '../../../components/categoryPage/filtres/filterBySize/FilterBySize';
import FilterByBrand from "../../../components/categoryPage/filtres/filterByBrand/FilterByBrand";
import FilteredProductsTop from "../../../components/categoryPage/filteredProducts/filteredProductsTop/FilteredProductsTop";
import FilteredProductsListContainer from "../filteredProductsListContainer/FilteredProductsListContainer";
import { useSearchParams } from 'react-router-dom';
import { useAllProducts } from '../../../hooks/useAllProducts';
import { IProduct } from '../../../services/productsApi';
import { colorCategories } from '../../../assets/data/colors';
import { useState, useMemo } from 'react';
import {
  useGetGoodsMenQuery,
  useGetGoodsWomenQuery,
  useGetGoodsMenGymQuery,
  useGetGoodsWomenGymQuery
} from '../../../services/productsApi';

interface ICategorys {
  [key: string]: IProduct[]
}

const GoodsCategorySection: React.FC = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [priceRange, setPriceRange] = useState<[number, number]>([1, 500]);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [sorted, setSorted] = useState<string>('default');
  const [itemsToShow, setItemsToShow] = useState<number[]>([1, 6]);

  const allProducts = useAllProducts();
  const menGymProducts = useGetGoodsMenGymQuery().data?.products;
  const menProducts = useGetGoodsMenQuery().data?.products;
  const womenProducts = useGetGoodsWomenQuery().data?.products;
  const womenGymProducts = useGetGoodsWomenGymQuery().data?.products;

  const categoryFromUrl = searchParams.get('category') || 'All';

  const applyFilters = (products: IProduct[] | undefined) => {
    if (!products) return [];

    return products
      .filter(item => item.price.current.value >= priceRange[0] && item.price.current.value <= priceRange[1])
      .filter(item => {
        if (!selectedColor) return true;
        const productColor = item.colour.trim();
        return colorCategories[selectedColor].includes(productColor);
      })
      .filter(item => {
        if (!selectedBrand) return true;
        return item.brandName === selectedBrand
      })
  }

  const categorys: ICategorys = useMemo(() => ({
    All: applyFilters(allProducts),
    'Men Gym': applyFilters(menGymProducts),
    Men: applyFilters(menProducts),
    Women: applyFilters(womenProducts),
    'Women Gym': applyFilters(womenGymProducts)
  }), [priceRange, allProducts, menGymProducts, womenGymProducts, menProducts, womenGymProducts])




  return (
    <section className="category">
      <div className="container">
        <div className="category__inner">
          <div className="category__filters">
            <FilterByCategoryContainer setCategory={(cat) => setSearchParams({ category: cat })} category={categoryFromUrl}/>
            <FilterByPrice range={priceRange} setValue={setPriceRange} />
            <FilterByColor setSelectedColor={setSelectedColor} selectedColor={selectedColor} />
            <FilterBySize />
            <FilterByBrand selectedBrand={selectedBrand} setSelectedBrand={setSelectedBrand} />
          </div>
          <div className="category__products">
            <FilteredProductsTop categoryTitle={categoryFromUrl} setSorted={setSorted} sorted={sorted} currentItems={itemsToShow} totalItems={categorys[categoryFromUrl].length}/>
            <FilteredProductsListContainer products={categorys[categoryFromUrl]} sortBy={sorted} setItemsToShow={setItemsToShow} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default GoodsCategorySection;