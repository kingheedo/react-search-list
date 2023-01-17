import React, { createContext, PropsWithChildren, useContext, useMemo, useState } from 'react';
import { data } from '../data/dummyData';

type Lists = {
    id: number;
    name: string;
    img: string;
    price: number;
    cat: string;
}[]

export const SearchCatContext = createContext('');
export const SearchCatChangeContext = createContext((result: string,e: React.MouseEvent<HTMLButtonElement>) => {null;});
export const SearchContext = createContext('');
export const SearchChangeContext = createContext((e :React.ChangeEvent<HTMLInputElement>) => {null;});
export const SearchPriceContext = createContext(0);
export const SearchPriceChangeContext = createContext((e :React.ChangeEvent<HTMLInputElement>) => {null;});
export const SearchListsContext = createContext<Lists>([]);

const SearchProvider = ({ children }: PropsWithChildren) => {
  const [text, setText] = useState('');
  const [cat, setCat] = useState('All');
  const [price, setPrice] = useState(200);
  
  const lists = useMemo(() => {
    const textFilterLists = data.filter((value) => value.name.toLowerCase().indexOf(text) !== -1);
    const priceFilterLists = textFilterLists.filter(value => 0 < value.price && price >= value.price);
    if (cat === 'All') {
      return priceFilterLists;
    } else {
      return priceFilterLists.filter(data => data.cat === cat);
    }
  }, [text,cat,price]);

  const onHandleCat = (result: string) => {
    setCat(result);
  };
  
  const onHandleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onHandlePrice = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };

  return (
    <SearchCatContext.Provider value={cat}>
      <SearchCatChangeContext.Provider value={onHandleCat}>
        <SearchContext.Provider value={text}>
          <SearchChangeContext.Provider value={onHandleText}>
            <SearchPriceContext.Provider value={price}>
              <SearchPriceChangeContext.Provider value={onHandlePrice}>
                <SearchListsContext.Provider value={lists}>
                  {children}
                </SearchListsContext.Provider>
              </SearchPriceChangeContext.Provider>
            </SearchPriceContext.Provider>
          </SearchChangeContext.Provider>
        </SearchContext.Provider>
      </SearchCatChangeContext.Provider>
      
    </SearchCatContext.Provider>
  );
};

export default SearchProvider;