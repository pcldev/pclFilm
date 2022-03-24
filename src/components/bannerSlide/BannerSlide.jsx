import React, { useState, useEffect, useRef } from "react";

import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import OutlineButton from "../button/OutlineButton";
import Button from "../button/Button";
import Modal, { ModalContent } from "../modal/Modal";

import filmApi from "../../api/fillmApi";
//import apiConfig from "../../api/apiConfig";

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
        console.log(response);
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
        //autoplay={{ delay: 3000 }}
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
      {/* {movieItems.map((item, i) => (
        <TrailerModal key={i} item={item} />
      ))} */}
    </div>
  );
};

const HeroSlideItem = (props) => {
  let hisrory = useHistory();

  const item = props.item;

  const background = item.cover;

  // const setModalActive = async () => {
  //   const modal = document.querySelector(`#modal_${item.id}`);

  //   const videos = await tmdbApi.getVideos(category.movie, item.id);

  //   if (videos.results.length > 0) {
  //     const videSrc = "https://www.youtube.com/embed/" + videos.results[0].key;
  //     modal
  //       .querySelector(".modal__content > iframe")
  //       .setAttribute("src", videSrc);
  //   } else {
  //     modal.querySelector(".modal__content").innerHTML = "No trailer";
  //   }

  //   modal.classList.toggle("active");
  // };

  return (
    <div
      className={`hero-slide__item ${props.className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info">
          <h2 className="title">{item.title}</h2>
          {/* <div className="overview">{item.overview}</div> */}
          <div className="btns">
            <Button onClick={() => hisrory.push("/movie/" + item.id)}>
              Watch now
            </Button>
            {/* <OutlineButton onClick={setModalActive}>
              Watch trailer
            </OutlineButton> */}
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img src={background} alt="" />
        </div>
      </div>
    </div>
  );
};

// const TrailerModal = (props) => {
//   const item = props.item;

//   const iframeRef = useRef(null);

//   const onClose = () => iframeRef.current.setAttribute("src", "");

//   return (
//     <Modal active={false} id={`modal_${item.id}`}>
//       <ModalContent onClose={onClose}>
//         <iframe
//           ref={iframeRef}
//           width="100%"
//           height="500px"
//           title="trailer"
//         ></iframe>
//       </ModalContent>
//     </Modal>
//   );
// };

export default BannerSlide;
