import './FilterByCategory.scss';

interface IFilterByCategoryProps {
  onCategoryClick: (value: string | null) => void
  category: string
}

const FilterByCategory: React.FC<IFilterByCategoryProps> = ({ onCategoryClick, category }) => {

  const categoryList: string[] = ['All', 'Women', 'Men', 'Women Gym', 'Men Gym'];

  return (
    <div className="categoryFilter">
      <h4 className="categoryFilter__title">Category</h4>
      <ul className="categoryFilter__list">
        {categoryList.map(item => {
          return (
            <li key={item} className="categoryFilter__item">
              <button className={`categoryFilter__button ${item === category ? 'active' : ''}`} onClick={(e) => onCategoryClick(e.currentTarget.textContent)}>{item}</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default FilterByCategory;