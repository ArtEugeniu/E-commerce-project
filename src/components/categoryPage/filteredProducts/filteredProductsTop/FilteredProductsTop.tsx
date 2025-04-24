import './FilteredProductsTop.scss';
import Select from 'react-select';
import { customSelectStyles } from '../../../select/Select';

interface IFilteredProductsTopProps {
  categoryTitle: string
  setSorted: (value: string) => void
  sorted: string
  currentItems: number[]
  totalItems: number
}

const options = [
  { value: 'default', label: 'Default' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' }
]

const FilteredProductsTop: React.FC<IFilteredProductsTopProps> = ({ categoryTitle, setSorted, sorted, currentItems, totalItems }) => {

  const handleSelect = (value: string | undefined) => {
    if (value) {
      if (value === sorted) return
      else setSorted(value)
    }
  }

  const selectValue = options.find(item => item.value === sorted);

  return (
    <div className="productsTop">
      <h3 className="productsTop__title">{categoryTitle}</h3>
      <div className="productsTop__inner">
        <div className="productsTop__info">Showing {currentItems[0]}-{currentItems[1]} of {totalItems} Products</div>
        <span>Sort By: </span>
        <Select options={options} value={selectValue} styles={customSelectStyles} onChange={(option) => handleSelect(option?.value)} />
      </div>
    </div>
  )
}

export default FilteredProductsTop;