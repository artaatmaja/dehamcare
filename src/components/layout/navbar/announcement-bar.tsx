import React from "react";

import gsap from "gsap";

const AnnouncementBar = () => {
  const handleCloseAnnouncement = () => {
    const announcementBar = document.querySelector(".announcement-bar");

    if (announcementBar) {
      gsap.to(announcementBar, {
        yPercent: -100,
        duration: 0.5,
        ease: "power1.inOut",
        onComplete: () => {
          announcementBar.remove();
        },
      });
    }
  };
  return (
    <div className="announcement-bar flex gap-60d overflow-hidden h-21d bg-light-green text-dark-green relative">
      <button
        onClick={handleCloseAnnouncement}
        className="absolute right-0 top-0 h-21d w-21d bg-dark-green flex items-center justify-center z-10 cursor-pointer"
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="0.707107"
            width="1"
            height="16"
            transform="rotate(-45 0 0.707107)"
            fill="white"
          />
          <rect
            x="11.3145"
            y="7.53403e-05"
            width="1"
            height="16"
            transform="rotate(45 11.3145 7.53403e-05)"
            fill="white"
          />
        </svg>
      </button>

      <div className="flex items-center gap-60d animate-marquee whitespace-nowrap">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="text-center text-10d uppercase font-medium"
          >
            FREE SHIPPING ON ALL ORDERS IN THE USA!
          </div>
        ))}
      </div>

      {/* Clone for seamless looping */}
      <div className="flex items-center gap-60d animate-marquee whitespace-nowrap">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="text-center text-10d uppercase font-medium"
          >
            FREE SHIPPING ON ALL ORDERS IN THE USA!
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBar;
