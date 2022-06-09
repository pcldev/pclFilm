import React from "react";
import SekeletonMovie from "../customSkeletonLoading/SekeletonMovie";
import CardFilm from "./CardFilm";
import "./ListFilm.scss";
function ListFilm(props) {
  const items = props.items;
  return (
    <ul className="list-film container">
      {items
        ? items.map((item, index) => (
            <li key={index}>
              <CardFilm
                imageUrl={item?.coverVerticalUrl}
                title={item?.name}
                type={item?.dramaType?.code}
                id={item?.id}
                category={item?.category}
                domainType={item?.domainType}
              />
            </li>
          ))
        : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <li
              key={item}
              style={{
                width: "100%",
                marginBottom: "100px",
              }}
            >
              <SekeletonMovie type="list-movie" />
            </li>
          ))}
    </ul>
  );
}

export default ListFilm;
