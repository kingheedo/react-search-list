import React, { useState } from 'react';
import './App.css';
import Main from './components/Main';
import SideBar from './components/SideBar/SideBar';
import SearchProvider from './context/SearchContext';

const App = () => {

  return (
    <div className="App">
      <SearchProvider>
        <SideBar/>
        <Main/>
      </SearchProvider>
    </div>
  );
};

export default App;
