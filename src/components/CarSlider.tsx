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
import SliderNavButton from "./SliderNavButton";

const CarSlider = () => {
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);
  const { cars, isLoadingCars, filter } = useContext(ModelsFilterContext);
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  const isMediumDevice = useMediaQuery("only screen and (min-width : 480px)");
  const isLargeDevice = useMediaQuery("only screen and (min-width : 1024px)");
  const showNav = isLargeDevice && (swiperRef?.slides?.length || 0) > 4;
  const slidesPerView = isLargeDevice ? 4 : isMediumDevice ? 2.5 : 1.3;

  swiperRef?.on("slideChange", (swiper) => {
    if (swiper.activeIndex === 0) {
      setPrevDisabled(true);
    } else if (swiper.activeIndex === cars.length - 4) {
      setNextDisabled(true);
    } else if (prevDisabled || nextDisabled) {
      setPrevDisabled(false);
      setNextDisabled(false);
    }
  });

  if (isLoadingCars) return null;

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        className="pb-12"
        slidesPerView={slidesPerView}
        spaceBetween={0}
        speed={500}
        navigation={true}
        pagination={!showNav}
        modules={[Pagination]}
      >
        {cars.map((car) => (
          <SwiperSlide key={car.id} className="px-2">
            <CarSliderItem car={car} />
          </SwiperSlide>
        ))}
      </Swiper>

      {showNav && (
        <div className="flex justify-end w-full max-lg:hidden pr-2">
          <SliderNavButton
            disabled={prevDisabled}
            onClick={() => swiperRef?.slidePrev()}
            leftNav={true}
          />
          <div className="w-4" />
          <SliderNavButton
            disabled={nextDisabled}
            onClick={() => swiperRef?.slideNext()}
          />
        </div>
      )}
    </>
  );
};

export default CarSlider;
