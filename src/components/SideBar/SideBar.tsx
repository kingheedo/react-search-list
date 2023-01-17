import Category from './Category';
import CategoryItem from './Category/CategoryItem';
import FilterPrice from './FilterPrice';
import './index.scss';
import Search from './Search';

const SideBar = () => {

  return (
    <div className="sideBar">
      <Search/>
      <Category>
        <CategoryItem cat ="All">
          <h2>All</h2>
        </CategoryItem>
        <CategoryItem cat ="Dress">
          <h2>Dress</h2>
        </CategoryItem>
        <CategoryItem cat ="Sport">
          <h2>Sport</h2>
        </CategoryItem>
        <CategoryItem cat ="Luxury">
          <h2>Luxury</h2>
        </CategoryItem>
        <CategoryItem cat ="Casual">
          <h2>Casual</h2>
        </CategoryItem>
      </Category>

      <FilterPrice/>
    </div>
  );
};

export default SideBar;