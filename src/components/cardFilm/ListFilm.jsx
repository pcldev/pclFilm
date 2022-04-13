import React from "react";
import CardFilm from "./CardFilm";
import "./ListFilm.scss";
function ListFilm(props) {
  const items = props.items;
  return (
    <ul className="list-film container">
      {items &&
        items.map((item, index) => (
          <li key={index}>
            <CardFilm
              imageUrl={item.coverVerticalUrl}
              title={item.name}
              type={item.dramaType.code}
              id={item.id}
              category={item.category}
              domainType={item?.domainType}
            />
          </li>
        ))}
    </ul>
  );
}

export default ListFilm;
