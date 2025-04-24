import FilteredProductsList from "../../../components/categoryPage/filteredProducts/filteredProductsList/FilteredProductsList";
import { IProduct } from "../../../services/productsApi";

interface FilteredProductsListContainerProps {
  products: IProduct[]
  sortBy: string
  setItemsToShow: (value: number[]) => void
}

const FilteredProductsListContainer: React.FC<FilteredProductsListContainerProps> = ({ products, sortBy, setItemsToShow }) => {


  const sortedProducts = (() => {
    switch (sortBy) {
      case 'price-asc':
        return [...products].sort((a, b) => a.price.current.value - b.price.current.value);
      case 'price-desc':
        return [...products].sort((a, b) => b.price.current.value - a.price.current.value);
      case 'default':
        return products
      default:
        return products
    }
  })();

  return (
    <FilteredProductsList products={sortedProducts} showedItems={setItemsToShow} />
  )
}

export default FilteredProductsListContainer;