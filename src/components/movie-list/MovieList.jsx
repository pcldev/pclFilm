import React from "react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/components/navigation/navigation.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
//import "swiper/modules/navigation/navigation.min.css";
import CardFilm from "../cardFilm/CardFilm";
import ListMovieSkeleton from "../customSkeletonLoading/ListMovieSkeleton";
import "./MovieList.scss";

function MovieList(props) {
  const items = props.items;
  SwiperCore.use([Navigation]);
  return (
    <div className="movie-list">
      {items ? (
        items.find((item) => item.homeSectionName) ? (
          items.map((item, index) => (
            <div key={index} className="movie-list_lstfilm">
              <h1>{item.homeSectionName || item.name}</h1>
              <Swiper
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={"auto"}
                navigation={true}
                modules={[Navigation]}
              >
                {item.recommendContentVOList.map((detailItem, detailIndex) => (
                  <SwiperSlide key={detailIndex}>
                    <CardFilm
                      imageUrl={detailItem.imageUrl}
                      title={detailItem.title}
                      category={detailItem.category}
                      type={detailItem.contentType}
                      id={detailItem.id}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ))
        ) : (
          <Swiper
            grabCursor={true}
            spaceBetween={10}
            slidesPerView={"auto"}
            navigation={true}
            modules={[Navigation]}
          >
            {items.map((item, index) => (
              <SwiperSlide key={index}>
                <CardFilm
                  imageUrl={item.coverVerticalUrl}
                  title={item.name}
                  id={item?.id}
                  category={item?.category}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )
      ) : (
        <ListMovieSkeleton />
      )}
    </div>
  );
}

export default MovieList;
