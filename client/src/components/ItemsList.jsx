import SingleItem from "./SingleItem";
import { Link, useLocation } from "react-router-dom";

const ItemsList = ({ title, items, itemsArray, path, individualPath }) => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const finalItems = isHome ? items : Infinity;

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>

        {isHome ? (
          <Link to={path} className="item-list__link">
            Mostrar tudo
          </Link>
        ) : (
          <></>
        )}
      </div>

      <div className="item-list__container">
        {itemsArray
          .filter((currValue, index) => index < finalItems)
          .map((itemObj, index) => (
            <SingleItem
              {...itemObj}
              idPath={individualPath}
              key={`${title}-${index}`}
            />
          ))}
      </div>
    </div>
  );
};

export default ItemsList;
