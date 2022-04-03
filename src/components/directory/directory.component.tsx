import CategoryItem from "../category-item/category-item.component";
import CategoryInterface from "../category-item/category-item.typings";
import { DirectoryInterface } from "./directory.typings";
import "./directory.styles.scss";
const Directory = ({categories}: DirectoryInterface) => {
  return (
    <div className="categories-container">
      {categories.map((category: CategoryInterface) => (
        <CategoryItem key={category.id} {...category}/>
      ))}
    </div>
  );
};
export default Directory;
