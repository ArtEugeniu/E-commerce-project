import './FilteredProductsList.scss';
import GoodsCard from '../../../cards/goodsCard/GoodsCard';
import { useNavigateToProduct } from '../../../../hooks/useNavigateToProduct';
import { IProduct } from '../../../../services/productsApi';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

interface IFilteredProductsListProps {
  products: IProduct[]
  showedItems: (value: number[]) => void
}

const FilteredProductsList: React.FC<IFilteredProductsListProps> = ({ products, showedItems }) => {

  const navigateToProduct = useNavigateToProduct();
  const [currentPage, setCurrentPage] = useState<number>(0);

  const itemsPerPage: number = 6;
  const offset = currentPage * itemsPerPage;
  const currentItems = products.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  useEffect(() => {
    const newPageCount = Math.ceil(products.length / itemsPerPage);
    if(currentPage >= newPageCount) {
      setCurrentPage(0)
    }
  }, [products.length, products])

  const handlePageClick = (event: { selected: number }) => {
    const newPage = event.selected;
    const newOffset = newPage * itemsPerPage;
    
    setCurrentPage(newPage);
    showedItems([newOffset + 1, newOffset + 6])
  }


  return (
    <div className="filteredProducts">
      <ul className="filteredProducts__list">
        {currentItems.map(item => <GoodsCard key={item.id} data={item} onProductClick={navigateToProduct} />)}
      </ul>

      <ReactPaginate
        pageCount={pageCount}
        onPageChange={handlePageClick}
        previousLabel={'←'}
        nextLabel={'→'}
        breakLabel={'...'}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        containerClassName={'pagination'}
        activeClassName={'active'}
        forcePage={currentPage}
      />

    </div>
  )
}

export default FilteredProductsList;