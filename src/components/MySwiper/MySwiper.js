import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import 'swiper/css/navigation';
import "./MySwiper.css";
import { EffectCoverflow, Autoplay, Navigation } from "swiper";

export default function SwiperComponent({ slides }) {
  return (
    <Swiper
      effect={"coverflow"}
      centeredSlides={true}
      slidesPerView={"auto"}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      tabIndex={1}
      coverflowEffect={{
        depth: 10,
        slideShadows: false,
      }}
      navigation={true}
      pagination={false}
      modules={[EffectCoverflow, Autoplay, Navigation]}
      className="mySwiper"
    >
      {slides.map((o) => {
        return (
          <SwiperSlide>
            <div
              className={
                "box-card"
              }
            >
              <img src={o} style={{ objectFit: "contain", width: "100%", height: '100%' }} />
            </div>
          </SwiperSlide>
        )
      })}

    </Swiper>
  );
}
