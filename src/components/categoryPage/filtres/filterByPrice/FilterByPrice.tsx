import './FilterByPrice.scss';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

interface IFilterByPriceProps {
  range: number[]
  setValue: (value: [number, number]) => void
}

const FilterByPrice: React.FC<IFilterByPriceProps> = ({ range, setValue }) => {

  return (
    <div className="priceFilter">
      <h4 className="priceFilter__title">Price</h4>
      <Slider
        range
        min={1}
        max={500}
        value={range}
        onChange={(value) => setValue(value as [number, number])}
      />
      <div className="priceFilter__prices">
        <label>
          $<input
            name='price-min'
            type='number'
            className="priceFilter__price priceFilter__price-min"
            value={range[0]}
            min={1}
            onChange={(e) => setValue([Number(e.target.value), range[1]])} />
        </label>
        <label>
          $<input
            name='price-max'
            type='number'
            className="priceFilter__price priceFilter__price-max"
            value={range[1]}
            onChange={(e) => setValue([range[0], Number(e.target.value)])} />
        </label>
      </div>
    </div>
  )
}

export default FilterByPrice;