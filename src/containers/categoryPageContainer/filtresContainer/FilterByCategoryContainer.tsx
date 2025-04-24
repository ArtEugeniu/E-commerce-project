import FilterByCategory from "../../../components/categoryPage/filtres/filterByCategory/FilterByCategory";

interface IFilterByCategoryContainerProps {
  setCategory: (value: string) => void
  category: string
}
const FilterByCategoryContainer: React.FC<IFilterByCategoryContainerProps> = ({ setCategory, category }) => {

  const handleCategory = (category: string | null) => {
    if (category !== null) {
      setCategory(category)
    }
  }

  return (
    <FilterByCategory onCategoryClick={handleCategory} category={category}/>
  )
}

export default FilterByCategoryContainer;