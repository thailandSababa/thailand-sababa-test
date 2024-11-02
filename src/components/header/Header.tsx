"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import { PhoneIcon } from "@heroicons/react/24/solid"; 

type HeaderProps = {
  showBackLink?: boolean; // Accept the prop
  showContactLink?: boolean;
};

const Header = ({ showBackLink, showContactLink = true }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300); // Adjust scroll threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`py-2 fixed top-0 left-0 w-full z-20 shadow-lg transition-all duration-300 ${
        scrolled
          ? "opacity-90 pointer-events-auto bg-slate-300"
          : "opacity-90 pointer-events-auto bg-slate-300"
      }`}
    >
      <div
        className={`container mx-auto flex ${
          showContactLink ? "justify-between" : "justify-end"
        }`}
      >
        <Link href="/#hero">
          <Image
            src="/logo/תאילנד סבבה.png"
            alt="logo"
            className="w-32 md:w-44"
            width={300}
            height={120}
          />
        </Link>

        {showContactLink && (
          <div className="flex items-center gap-4">
            <Link
              href="#form"
              className="text-black flex flex-col justify-center text-sm md:text-lg px-4 -my-2 rounded-lg hover:scale-105"
            >
              <div className="font-semibold">
                <p className="text-center">לחצו כאן</p>
                <p className="text-center">להשארת פרטים</p>
              </div>
            </Link>

            {/* <div className="flex flex-col md:flex-row justify-center my-auto gap-2 bg-orange-200 p-2 rounded-md">
              <span className="flex justify-center">
                <PhoneIcon className="w-6 text-center text-orange-600" />
              </span>
              <p className="text-center text-sm md:text-base text-orange-700">
                טלפון חירום
              </p>
              <p className="text-center text-sm md:text-base">0507344236</p>
            </div> */}
          </div>
        )}

        {showBackLink && (
          <Link href="/#hero" className="mt-10 text-xl">
            חזרה לעמוד הבית
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
