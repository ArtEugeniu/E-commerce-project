import './FilterByBrand.scss';
import { brandsList } from '../../../../assets/data/brands';
import { useState } from 'react';


interface IFilterByBrandProps {
  selectedBrand: string | null
  setSelectedBrand: (value: string | null) => void
}

const FilterByBrand: React.FC<IFilterByBrandProps> = ({ selectedBrand, setSelectedBrand }) => {

  const [showMore, setShowMore] = useState<number>(4);

  const handleBrand = (brand: string) => {
    if (brand === selectedBrand) {
      setSelectedBrand(null)
    } else {
      setSelectedBrand(brand)
    }
  }

  const handleShowMore = () => {
    if (showMore === 4) {
      setShowMore(brandsList.length)
    } else {
      setShowMore(4)
    }
  }

  return (
    <div className="brandFilter">
      <div className="brandFilter__top">
        <h4 className="brandFilter__title">Brands</h4>
        <button className={`brandFilter__showMore ${showMore > 4 ? 'brandFilter__showMore--active' : ''}`} onClick={handleShowMore}></button>
      </div>
      <ul className="brandFilter__list">

        {brandsList.slice(0, showMore).map(item => {
          return (
            <li className="brandFilter__item" key={item}>
              <button className={`brandFilter__button ${selectedBrand === item ? 'active' : ''}`} onClick={() => handleBrand(item)}>{item}</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default FilterByBrand;