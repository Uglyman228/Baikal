import React from "react";
import fors from "./images/icon.svg";

export const Footer = () => {
  return (
    <footer className=" bg-black items-center">
      <div className=" container flex items-center flex-col gap-5  h-40">
        <div className=" flex justify-center gap-3 items-center mt-11">
          <p className="text-gray-400">459 BROADWAY, NEW YORK</p>
          <p className="text-gray-400">(212) 555-0123</p>
          <p className="text-gray-400  duration-300 hover:underline hover:text-blue-400">
            PLACEHOLDER@GMAIL.COM
          </p>
        </div>
        <div className="flex gap-1">
          <p className="text-gray-700">Powered by</p>
          <p className="text-gray-700 underline-offset-4 font-serif duration-300 underline hover:text-gray-800 cursor-pointer">
            ThemeWagon
          </p>
        </div>
      </div>
    </footer>
  );
};
