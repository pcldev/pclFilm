import React, { useState, useEffect, useRef } from "react";

import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Button from "../button/Button";

import filmApi from "../../api/fillmApi";

import "swiper/swiper.scss";

import "./BannerSlide.scss";
import { useHistory } from "react-router";

const BannerSlide = () => {
  SwiperCore.use([Autoplay]);

  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await filmApi.getSearchLeaderBoard();
        setMovieItems(response.data.list);
      } catch {
        console.log("error");
      }
    };
    getMovies();
  }, []);

  return (
    <div className="hero-slide">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 10000 }}
        loop={true}
      >
        {movieItems.map((item, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <HeroSlideItem
                item={item}
                className={`${isActive ? "active" : ""}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const HeroSlideItem = (props) => {
  let hisrory = useHistory();

  const item = props.item;

  const background = item.cover;

  return (
    <div
      className={`hero-slide__item ${props.className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info">
          <h2 className="title">{item.title}</h2>
          <div className="btns">
            <Button onClick={() => hisrory.push("/movie/" + item.id)}>
              Watch now
            </Button>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img src={background} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BannerSlide;
