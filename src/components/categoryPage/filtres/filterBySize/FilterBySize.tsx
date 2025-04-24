import './FilterBySize.scss';
import { useState } from 'react';

const sizeList = ['Small', 'Medium', 'Large', 'X-Large'];

const FilterBySize: React.FC = () => {

  const [currentSize, setCurrentSize] = useState<string | null>(null);

  const handleSize = (size: string) => {
    if (size === currentSize) setCurrentSize(null)
    else setCurrentSize(size);
  }

  return (
    <div className="sizeFilter">
      <h4 className="sizeFilter__title">Size</h4>
      <ul className="sizeFilter__list">
        {sizeList.map(item => {
          return (
            <li className="sizeFilter__item" key={item}>
              <button className={`sizeFilter__button ${currentSize === item ? 'active' : ''}`} onClick={() => handleSize(item)}>{item}</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default FilterBySize;