import { useContext } from 'react';
import { SearchCatChangeContext, SearchCatContext } from '../../../../context/SearchContext';
import classNames from 'classnames';
import './index.scss';

interface ICategoryItemProps {
  children : JSX.Element;
  cat: 'All' | 'Dress' | 'Sport' | 'Luxury' | 'Casual'
}

const CategoryItem = ({ children, cat }:ICategoryItemProps) => {
  const searchCat = useContext(SearchCatContext);
  const onHandleCat = useContext(SearchCatChangeContext);
  
  return (
    <button className={classNames ('category__btn', searchCat === cat && 'active')}onClick={(e) => {onHandleCat(cat,e);}}>
      {children}
    </button>
  );
};

export default CategoryItem;