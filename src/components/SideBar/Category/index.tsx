import React, { PropsWithChildren } from 'react';
import './index.scss';

const Category = ({ children }: PropsWithChildren) => {
  return (
    <div className="categories">
      <span className="title">Categories</span>
      <div className="btn-container">
        {children}
      </div>
    </div>
  );
};

export default Category;