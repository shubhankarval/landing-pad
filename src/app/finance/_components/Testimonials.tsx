"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { useState } from "react";
// import { useSwiper } from "swiper/react";

/*
You can use the onSwiper event for the Swiper component to save the swiper instance with React.useState and then pass this instance as a prop to swiper next/prev buttons component.

<Swiper                     
  onSwiper={(swiper) => setSwiperInstance(swiper)}
>
   ...slides
</Swiper>

*/

const testimonials = [
  {
    name: "Tony Stark",
    title: "CEO",
  },
  {
    name: "Ranveer",
    title: "Webflow Developer",
  },
  {
    name: "Mahesh",
    title: "CTO",
  },
  {
    name: "Daquavion",
    title: "Head of Sales",
  },
  {
    name: "Bruce Wayne",
    title: "Galiant Knight",
  },
];

export default function Testimonials() {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  return (
    <section className="bg-[#cbfc01] selection:bg-[#151515] selection:text-[#CBFC01] px-0 pb-28 pt-32 relative -z-10">
      <Image
        src="/finance/grid-2.svg"
        alt=""
        width={0}
        height={0}
        className="absolute left-0 top-0 z-[-1] w-full"
      />
      <h3 className="px-28 text-[#151515]">Our Clients</h3>
      <div className="mb-14 flex items-center justify-between px-28">
        <div>
          <h2 className="max-w-2xl text-7xl leading-tight text-[#151515]">
            Global Businesses Love FinanceX
          </h2>
        </div>
        <div className="flex gap-5">
          <button
            onClick={() => swiperInstance.slidePrev()}
            className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#151515] bg-transparent"
          >
            <Image
              src="/finance/left-arrow.svg"
              alt=""
              width={0}
              height={0}
              className="mr-1 w-4"
            />
          </button>
          <button
            onClick={() => swiperInstance.slideNext()}
            className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#151515] bg-[#151515]"
          >
            <Image
              src="/finance/right-arrow.svg"
              alt=""
              width={0}
              height={0}
              className="ml-1 w-4"
            />
          </button>
        </div>
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={3.5}
        centeredSlides={true}
        initialSlide={2}
        modules={[Navigation]}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        // loop={true}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide style={{ width: "fit-content" }} key={index}>
            <div className="w-96 bg-[#151515] px-9 pb-10 pt-12">
              <p className="max-w-72 leading-loose text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor rhoncus dolor purus non enim praesent elementum
                facilisis leo, vel
              </p>
              <div className="mt-7 flex items-center gap-3">
                <Image
                  src={`/finance/client-${index + 1}.svg`}
                  alt=""
                  height={0}
                  width={0}
                  className="w-12"
                />
                <div>
                  <div className="font-sato font-bold">{item.name}</div>
                  <div className="text-sm text-[#b9b9b9]">{item.title}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
