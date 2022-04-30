import React from "react";
import "./MovieList.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import CardFilm from "../cardFilm/CardFilm";
import SekeletonMovie from "../customSkeletonLoading/SekeletonMovie";
import ListMovieSkeleton from "../customSkeletonLoading/ListMovieSkeleton";

function MovieList(props) {
  const items = props.items;
  return (
    <div className="movie-list">
      {items ? (
        items.find((item) => item.homeSectionName) ? (
          items.map((item, index) => (
            <div key={index}>
              <h1>{item.homeSectionName || item.name}</h1>
              <Swiper
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={"auto"}
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
          <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
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
        // [1, 2, 3, 4, 5, 6, 7].map((item) => (
        //   <div key={item}>
        //     <SekeletonMovie type="title" />
        //     <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
        //       {[1, 2, 3, 4, 5, 6, 7].map((second_item) => (
        //         <SwiperSlide key={second_item}>
        //           <SekeletonMovie type="list-movie" />
        //         </SwiperSlide>
        //       ))}
        //     </Swiper>
        //   </div>
        // ))
        <ListMovieSkeleton />
      )}
    </div>
  );
}

export default MovieList;
