import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["600", "700"] });

const Header = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-2 py-2 shadow-sm">
        <Image src="/chef.png" alt="Chef Logo" height={40} width={40} />
        <h1 className={`text-xl ${inter.className}`}>FlavourForge</h1>
      </div>
    </>
  );
};

export default Header;
