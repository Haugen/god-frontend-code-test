import { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "@react-hookz/web";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import { fetchCars } from "../utils/api-fetchers";
import Car from "./Car";

const CarSlider = () => {
  const { data, isLoading } = useQuery(["cars"], () => fetchCars());
  const [swiperRef, setSwiperRef] = useState<Swiper>(null);
  const isMediumDevice = useMediaQuery("only screen and (min-width : 480px)");
  const isLargeDevice = useMediaQuery("only screen and (min-width : 1024px)");

  const slidesPerView = isLargeDevice ? 4 : isMediumDevice ? 2.5 : 1.3;

  if (isLoading) return null;

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={slidesPerView}
        spaceBetween={20}
        speed={500}
        navigation={true}
        pagination={true}
        modules={[Pagination]}
      >
        {data?.map((car) => (
          <SwiperSlide key={car.id} className="first:ml-4">
            <Car car={car} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button onClick={() => swiperRef.slidePrev()}>prev</button>
      <button onClick={() => swiperRef.slideNext()}>next</button>
    </>
  );
};

export default CarSlider;
