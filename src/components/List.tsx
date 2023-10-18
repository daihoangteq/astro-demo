import React, { Children, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Props {
  data: {
    title: string;
    image: string;
  }[];
}
const List: React.FC<Props> = ({ data }) => {
  useEffect(() => {
    console.log("Hello List");
  }, []);
  return (
    <>
      {" "}
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((item) => {
          return (
            <SwiperSlide key={item.title}>
              <img src={item.image} alt={item.title} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default List;
