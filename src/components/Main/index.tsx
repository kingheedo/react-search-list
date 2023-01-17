import { useContext } from 'react';
import { SearchListsContext } from '../../context/SearchContext';

import './index.scss';

const MainItems = () => {
  const lists = useContext(SearchListsContext);
  
  return (
    <>
      {
        lists.map(value => (
          <div key={value.name} className="item">
            <img className="item__img" src={value.img} alt="item-image" />
            <span className="item__name">{value.name}</span>
            <strong className="item__price">{value.price}</strong>
          </div>
        ))
      }
    </>
  );
};

const Main = () => {
  
  return (
    <div className="main">
      <MainItems />
    </div>
  );
};

export default Main;