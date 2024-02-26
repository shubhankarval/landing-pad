"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import Image from "@components/Image";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import Card from "./Card";

const featuredData = [
  { title: "Frilled Sleeves Midi Dress", price: 200, imgIdx: 1 },
  { title: "Round Neck Solid Top", price: 150, imgIdx: 2 },
  { title: "White Rayon Short Blouson Crop Top", price: 250, imgIdx: 3 },
];

export default function Featured({ imgUrl }: { imgUrl: string }) {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  return (
    <div className="relative mt-20">
      <Image
        src={imgUrl + "vector-3"}
        className="absolute -left-11 -top-9 z-[2] w-32"
      />
      <div className="absolute -bottom-20 -right-14 h-72 w-72 bg-pale-blue"></div>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        modules={[Navigation]}
        loop={true}
        navigation={true}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
      >
        {featuredData.map((item, index) => (
          <SwiperSlide key={index}>
            <Card
              imgUrl={imgUrl + `featured-${index + 1}`}
              price={item.price}
              text={item.title}
            />
          </SwiperSlide>
        ))}
        <NavArrow
          imgUrl={imgUrl}
          className=""
          direction="left"
          onclick={() => swiperInstance.slidePrev()}
        />
        <NavArrow
          imgUrl={imgUrl}
          className="right-0"
          direction="right"
          onclick={() => swiperInstance.slideNext()}
        />
      </Swiper>
    </div>
  );
}

interface NavArrowProps {
  imgUrl: string;
  direction: string;
  className: string;
  onclick: any;
}

const NavArrow = ({ imgUrl, direction, className, onclick }: NavArrowProps) => {
  return (
    <button
      className={twMerge(
        "absolute top-1/3 z-[2] flex h-14 w-14 items-center justify-center bg-navy-blue",
        className,
      )}
      onClick={onclick}
    >
      <Image src={imgUrl + "arrow-" + direction} className="w-7" />
    </button>
  );
};
