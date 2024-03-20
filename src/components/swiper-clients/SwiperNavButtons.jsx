import React from "react";
import { useSwiper } from "swiper/react";

function SwiperNavButtons() {
  const swiper = useSwiper();

  return (
    <div>
      <button onClick={() => swiper.slidePrev()}>Prev</button>
      <button onClick={() => swiper.slideNext()}>Next</button>
    </div>
  );
}

export default SwiperNavButtons;
