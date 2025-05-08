"use client";

import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
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
];

const HomepageHero = () => {
  return (
    <div>
      <Swiper>
        {data.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="w-screen h-screen relative">
                <h2 className="pt-79d text-center text-136d text-dark-green leading-none">
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
      </Swiper>
    </div>
  );
};

export default HomepageHero;
