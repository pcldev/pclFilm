import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useHistory } from "react-router";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import { resizeImage } from "../../share/tools";
import Button from "../button/Button";
import SekeletonMovie from "../customSkeletonLoading/SekeletonMovie";
import "./BannerSlide.scss";

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
        {movieItems ? (
          movieItems.map((item, i) => (
            <SwiperSlide key={i}>
              {({ isActive }) => (
                <HeroSlideItem
                  item={item}
                  className={`${isActive ? "active" : ""}`}
                />
              )}
            </SwiperSlide>
          ))
        ) : (
          <HeroSlideItem />
        )}
      </Swiper>
    </div>
  );
};

const HeroSlideItem = (props) => {
  let hisrory = useHistory();

  const item = props.item;
  return (
    <div className={`hero-slide__item ${props.className}`}>
      <div className="banner-img">
        {item ? (
          <LazyLoadImage
            src={resizeImage(item.cover, "900")}
            effect="blur"
            delayTime={500}
          />
        ) : (
          <SekeletonMovie type="hero-slide" />
        )}
      </div>
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info">
          <h2 className="title">
            {item ? item.title : <SekeletonMovie type="title" />}
          </h2>
          <div className="btns">
            {item && (
              <Button
                onClick={() =>
                  hisrory.push(
                    `/${
                      item.domainType === 1
                        ? `tv/${item.id}/0`
                        : `movie/${item.id}/1`
                    }`
                  )
                }
              >
                Watch now
              </Button>
            )}
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          {item ? (
            <img src={resizeImage(item.cover, "500")} alt="" />
          ) : (
            <SekeletonMovie type="coverVerticalUrl" />
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(BannerSlide);
