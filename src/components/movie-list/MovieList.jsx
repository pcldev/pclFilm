import React from "react";
import "./MovieList.scss";
import { Swiper, SwiperSlide } from "swiper/react";
// import { SwiperSlide, Swiper } from "swiper/swiper-react";
import { useEffect } from "react";
import { useState } from "react";
import filmApi from "../../api/fillmApi";
import CardFilm from "../cardFilm/CardFilm";

function MovieList(props) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    try {
      const fetchListFilm = async () => {
        const response = await filmApi.getHome();
        setItems(
          response.data.recommendItems
            .filter((item) => !item.bannerProportion)
            .filter((item) => item.homeSectionName !== "")
        );
      };
      fetchListFilm();
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div className="movie-list">
      {items &&
        items.map((item, index) => (
          <div key={index}>
            <h1>{item.homeSectionName}</h1>
            <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
              {item.recommendContentVOList.map((detailItem, detailIndex) => (
                <SwiperSlide key={detailIndex}>
                  <CardFilm
                    imageUrl={detailItem.imageUrl}
                    title={detailItem.title}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
    </div>
  );
}

export default MovieList;
