"use client";

import React, { useRef } from "react";
import Image from "next/image";

import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";

const data = [
  {
    id: "10c5dcb1-ecb6-4b51-8cfe-959667b15e2f",
    title: "ACTIVE MG",
    subtitle: "Where Life Begins Again",
    description:
      "Formulated with highly absorbable magnesium, this supplement fuels your body with the essential nutrients it craves—helping you move better, sleep deeper, and feel truly energized every day.",
    image: "/homepage/carousel1.png",
  },
  {
    id: "098146f4-51cb-4179-aafc-39de37007f25",
    title: "ACTIVE MG",
    subtitle: "Where Life Begins Again",
    description:
      "Formulated with highly absorbable magnesium, this supplement fuels your body with the essential nutrients it craves—helping you move better, sleep deeper, and feel truly energized every day.",
    image: "/homepage/carousel1.png",
  },
];

const HomepageHero = () => {
  const swiperRef = useRef<SwiperRef>(null);

  const handleSwiper = (direction: "next" | "prev") => {
    if (swiperRef.current) {
      if (direction === "next") {
        swiperRef.current.swiper.slideNext();
      } else {
        swiperRef.current.swiper.slidePrev();
      }
    }
  };

  return (
    <div className="pt-64d">
      <Swiper ref={swiperRef}>
        {data.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="w-screen min-h-screen relative">
                <h2 className="pt-64d text-center text-136d text-dark-green leading-none">
                  {item.title}
                </h2>
                <div className="mt-70d grid md:grid-cols-12 gap-20d px-40d z-10 relative">
                  <div className="md:landscape:col-span-9 w-[44.44%]">
                    <h3 className="text-70d text-dark-green leading-none">
                      {item.subtitle}
                    </h3>
                  </div>
                  <div className="md:landscape:col-span-3">
                    <p className="text-13d text-black/60 leading-1.3 pt-60d">
                      {item.description}
                    </p>
                    <div className="mt-32d flex gap-20d">
                      <Link
                        href="/"
                        className="text-12d uppercase rounded-full bg-light-green text-dark-green h-30d px-16d font-extrabold flex items-center"
                      >
                        Learn More
                      </Link>
                      <Link
                        href="/"
                        className="text-12d uppercase rounded-full bg-dark-green text-white h-30d px-16d font-extrabold flex items-center"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
                <Image
                  src={"/homepage/carousel1.png"}
                  alt="carousel"
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          );
        })}
        <div className="absolute right-40d bottom-100d z-10 flex gap-20d">
          <button
            onClick={() => handleSwiper("prev")}
            className="bg-light-green px-16d h-30d rounded-full"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6654 9.16675L6.5237 9.16675L11.182 4.50842L9.9987 3.33342L3.33203 10.0001L9.9987 16.6667L11.1737 15.4917L6.5237 10.8334L16.6654 10.8334L16.6654 9.16675Z"
                fill="#1A4133"
              />
            </svg>
          </button>
          <button
            onClick={() => handleSwiper("next")}
            className="bg-light-green px-16d h-30d rounded-full"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.33464 10.8333L13.4763 10.8333L8.81797 15.4916L10.0013 16.6666L16.668 9.99992L10.0013 3.33325L8.8263 4.50825L13.4763 9.16658L3.33464 9.16658L3.33464 10.8333Z"
                fill="#1A4133"
              />
            </svg>
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default HomepageHero;
