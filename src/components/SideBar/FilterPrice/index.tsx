import React, { useContext } from 'react';
import { SearchPriceChangeContext, SearchPriceContext } from '../../../context/SearchContext';
import './index.scss';

const FilterPrice = () => {
  const price = useContext(SearchPriceContext);
  const onHandlePrice = useContext(SearchPriceChangeContext);

  return (
    <div className="filterPrice">
      <span className="filterPrice__title">Maximum Price</span>
      <label htmlFor="filterPrice__range">
        <input step={5} value={price} type="range" name="filterPrice__range" min={10} max={200} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {onHandlePrice(e);}}/>
        <strong>{price}</strong>
      </label>
    </div>
  );
};

export default FilterPrice;