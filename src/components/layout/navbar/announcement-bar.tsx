import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const AnnouncementBar: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState<number>(0);
  const [animationDuration, setAnimationDuration] = useState<number>(15); // Default duration

  // Handle measurement and animation setup
  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    // Get the width of a single content block
    const contentWidth = contentRef.current.offsetWidth;
    setContentWidth(contentWidth);

    // Calculate animation duration based on content width
    const newDuration = contentWidth / 70;
    setAnimationDuration(newDuration);

    // Create the animation
    const marqueeAnimation = gsap.to(".marquee-content", {
      x: -contentWidth,
      duration: newDuration,
      ease: "linear",
      repeat: -1,
      paused: true,
    });

    // Start the animation
    marqueeAnimation.play();

    // Handle window resize
    const handleResize = () => {
      if (!contentRef.current) return;

      setContentWidth(contentRef.current.offsetWidth);
      marqueeAnimation.kill();

      const updatedDuration = contentRef.current.offsetWidth / 30;
      setAnimationDuration(updatedDuration);

      gsap.to(".marquee-content", {
        x: -contentRef.current.offsetWidth,
        duration: updatedDuration,
        ease: "linear",
        repeat: -1,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      marqueeAnimation.kill();
    };
  }, []);

  const handleCloseAnnouncement = (): void => {
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

  const announcement = "FREE SHIPPING ON ALL ORDERS IN THE USA!";
  const repeats = 6;

  return (
    <div
      ref={containerRef}
      className="announcement-bar flex items-center overflow-hidden h-21d bg-light-green text-dark-green relative"
    >
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

      <div className="flex items-center relative">
        {/* First content block (measured) */}
        <div
          ref={contentRef}
          className="marquee-content flex items-center whitespace-nowrap"
        >
          {[...Array(repeats)].map((_, index) => (
            <div
              key={index}
              className="text-center text-10d uppercase font-medium pr-60d"
            >
              {announcement}
            </div>
          ))}
        </div>

        {/* Duplicate block for seamless looping */}
        <div
          className="marquee-content flex items-center whitespace-nowrap"
          style={{ position: "absolute", left: contentWidth }}
        >
          {[...Array(repeats)].map((_, index) => (
            <div
              key={index}
              className="text-center text-10d uppercase font-medium pr-60d"
            >
              {announcement}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
