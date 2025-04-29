import { useRef } from "react";

import AnnouncementBar from "@/components/layout/navbar/announcement-bar";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const navRef = useRef(null);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-navbar">
      <AnnouncementBar />
      <div className="h-64d px-40d bg-light-ivory flex items-center justify-between border-b border-dark-green">
        <div className="flex-1">
          <ul className="flex gap-32d">
            <li className="text-center uppercase list-none whitespace-nowrap font-semibold text-10d text-dark-green">
              <Link href="/">Home</Link>
            </li>
            <li className="text-center uppercase list-none whitespace-nowrap font-semibold text-10d text-dark-green">
              <Link href="/">Products</Link>
            </li>
            <li className="text-center uppercase list-none whitespace-nowrap font-semibold text-10d text-dark-green">
              <Link href="/">Research</Link>
            </li>
            <li className="text-center uppercase list-none whitespace-nowrap font-semibold text-10d text-dark-green">
              <Link href="/">About Us</Link>
            </li>
            <li className="text-center uppercase list-none whitespace-nowrap font-semibold text-10d text-dark-green">
              <Link href="/">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="flex-1 flex items-center justify-center gap-16d">
          <Image src="/logo.png" alt="Logo" width={24} height={24} />
          <p className="font-bold text-20d text-black">DEHAM CARE</p>
        </div>
        <div className="flex-1">
          <div className="ml-auto flex items-center gap-32d w-fit">
            <Link href="/" className="text-10d font-semibold text-dark-green">
              LOGIN
            </Link>
            <button>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.146 15.3707 4.888 14.112C3.63 12.8533 3.00067 11.316 3 9.5C2.99933 7.684 3.62867 6.14667 4.888 4.888C6.14733 3.62933 7.68467 3 9.5 3C11.3153 3 12.853 3.62933 14.113 4.888C15.373 6.14667 16.002 7.684 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21ZM9.5 14C10.75 14 11.8127 13.5627 12.688 12.688C13.5633 11.8133 14.0007 10.7507 14 9.5C13.9993 8.24933 13.562 7.187 12.688 6.313C11.814 5.439 10.7513 5.00133 9.5 5C8.24867 4.99867 7.18633 5.43633 6.313 6.313C5.43967 7.18967 5.002 8.252 5 9.5C4.998 10.748 5.43567 11.8107 6.313 12.688C7.19033 13.5653 8.25267 14.0027 9.5 14Z"
                  fill="#1A4133"
                />
              </svg>
            </button>
            <button className="flex items-center gap-8d">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_242_3607)">
                  <path
                    d="M3.95833 3.95833H17.4167L15.8333 11.0833H5.54167M5.54167 11.0833L3.16667 1.58333H0M5.54167 11.0833L6.33333 14.25H16.625M15.0417 18.2083C14.8317 18.2083 14.6303 18.1249 14.4819 17.9765C14.3334 17.828 14.25 17.6266 14.25 17.4167C14.25 17.2067 14.3334 17.0053 14.4819 16.8569C14.6303 16.7084 14.8317 16.625 15.0417 16.625C15.2516 16.625 15.453 16.7084 15.6015 16.8569C15.7499 17.0053 15.8333 17.2067 15.8333 17.4167C15.8333 17.6266 15.7499 17.828 15.6015 17.9765C15.453 18.1249 15.2516 18.2083 15.0417 18.2083ZM7.125 18.2083C6.91504 18.2083 6.71367 18.1249 6.56521 17.9765C6.41674 17.828 6.33333 17.6266 6.33333 17.4167C6.33333 17.2067 6.41674 17.0053 6.56521 16.8569C6.71367 16.7084 6.91504 16.625 7.125 16.625C7.33496 16.625 7.53633 16.7084 7.68479 16.8569C7.83326 17.0053 7.91667 17.2067 7.91667 17.4167C7.91667 17.6266 7.83326 17.828 7.68479 17.9765C7.53633 18.1249 7.33496 18.2083 7.125 18.2083Z"
                    stroke="#1A4133"
                    stroke-width="1.58333"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_242_3607">
                    <rect width="19" height="19" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className="h-21d w-21d bg-dark-green rounded-full flex items-center justify-center text-white font-semibold text-10d">
                0
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
