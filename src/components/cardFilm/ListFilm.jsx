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
            <CardFilm imageUrl={item.coverVerticalUrl} title={item.name} />
          </li>
        ))}
    </ul>
  );
}

export default ListFilm;
