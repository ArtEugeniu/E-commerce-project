import './FilterByColor.scss';
import { colorCategories } from '../../../../assets/data/colors';
import { useState } from 'react';

interface IFilterByColorProps {
  setSelectedColor: (value: string | null) => void
  selectedColor: string | null
}

const FilterByColor: React.FC<IFilterByColorProps> = ({ setSelectedColor, selectedColor }) => {

  const [showMore, setShowMore] = useState<number>(5);

  const colors = Object.keys(colorCategories)

  const handleColor = (color: string) => {
    if (color === selectedColor) {
      setSelectedColor(null)
    } else {
      setSelectedColor(color)
    }
  }

  const handleShowMore = () => {
    if (showMore === 5) {
      setShowMore(colors.length)
    } else {
      setShowMore(5)
    }
  }

  return (
    <div className="colorFilter">
      <div className="brandFilter__top">
        <h4 className="colorFilter__title">Colors</h4>
        <button className={`colorFilter__showMore ${showMore > 5 ? 'colorFilter__showMore--active' : ''}`} onClick={handleShowMore}></button>
      </div>
      <ul className="colorFilter__list">
        {colors.slice(0, showMore).map(item => {
          return <li className="colorFilter__item" key={item}>
            <button
              className={`colorFilter__button ${selectedColor === item ? 'active' : ''}`}
              style={{ backgroundColor: item.toLocaleLowerCase() }}
              onClick={() => handleColor(item)}
            />
          </li>
        })}
      </ul>
    </div>
  )
}

export default FilterByColor;