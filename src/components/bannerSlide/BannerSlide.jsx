import React from "react";

import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Button from "../button/Button";

import "swiper/swiper.scss";

import "./BannerSlide.scss";
import { useHistory } from "react-router";

const BannerSlide = (props) => {
  const movieItems = props.movieItems;
  SwiperCore.use([Autoplay]);

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
  console.log(item);
  const background = item.cover;

  return (
    <div className={`hero-slide__item ${props.className}`}>
      <div className="banner-img">
        <LazyLoadImage src={background} effect="blur" delayTime={500} />
      </div>
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info">
          <h2 className="title">{item.title}</h2>
          <div className="btns">
            <Button
              onClick={() =>
                hisrory.push(
                  `/${item.domainType === 1 ? "tv" : "movie"}/${item.id}/1`
                )
              }
            >
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

export default React.memo(BannerSlide);
