import { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "@react-hookz/web";
import SwiperClass, { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import { fetchCars } from "../utils/api-fetchers";
import CarSliderItem from "./CarSliderItem";
import { ModelsFilterContext } from "../context/ModelFilterContext";
import ChevronSmall from "../icons/ChevronSmall";

const CarSlider = () => {
  const { filter } = useContext(ModelsFilterContext);
  const { data, isLoading } = useQuery(["cars", filter], () =>
    fetchCars(filter)
  );
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  const isMediumDevice = useMediaQuery("only screen and (min-width : 480px)");
  const isLargeDevice = useMediaQuery("only screen and (min-width : 1024px)");

  const slidesPerView = isLargeDevice ? 4 : isMediumDevice ? 2.5 : 1.3;

  if (isLoading) return null;

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={slidesPerView}
        spaceBetween={0}
        speed={500}
        navigation={true}
        pagination={true}
        modules={[Pagination]}
      >
        {data?.map((car) => (
          <SwiperSlide key={car.id} className="first:ml-2 last:mr-4 px-2">
            <CarSliderItem car={car} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-end w-full max-lg:hidden">
        <button
          className="border border-gray-900 flex items-center justify-center rounded-full w-10 h-10 p-3"
          onClick={() => swiperRef?.slidePrev()}
          aria-label="Previous car"
        >
          <ChevronSmall className="rotate-180 pl-1" />
        </button>
        <button
          className="border border-gray-900 flex items-center justify-center rounded-full w-10 h-10 p-3"
          onClick={() => swiperRef?.slideNext()}
          aria-label="Next car"
        >
          <ChevronSmall className="pl-1" />
        </button>
      </div>
    </>
  );
};

export default CarSlider;
