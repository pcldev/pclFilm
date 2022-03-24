import React from "react";
import BannerSlide from "../components/bannerSlide/BannerSlide";
import Header from "../components/header/Header";

function Home(props) {
  return (
    <div>
      <Header />
      <BannerSlide />
    </div>
  );
}

export default Home;
