import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { CiTwitter } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

export function BottomSection2() {
  return (
    <section className="">
      <div className="flex flex-col gap-5 justify-center items-center mt-36 mb-16 container">
        <h1 className=" text-3xl text-center ">
          A Bootstrap 4 website template for entrepreneurial community.
        </h1>
        <p className="w-[500px] text-sm text-gray-500 text-center">
          Some of the coolest websites on earth are empowered by ThemeWagon. To
          continue the ambience, Baikal aims to help the rapidly growing
          entrepreneurial community to go online.It's loaded with many elements
          & features. See what you can do with it.
        </p>
        <div className=" flex gap-2">
          <p>For any questions please contact</p>
          <p className=" text-blue-600 hover:underline hover:text-blue-400 hover:underline-offset-1 cursor-pointer">
            {" "}
            info@yourdomain.com
          </p>
        </div>
        <div className="flex lg:flex-row gap-20 mt-10 flex-col">
          <div className=" flex justify-center items-center flex-col w-[500px] gap-4">
            <img
              src="https://prium.github.io/Baikal-v2/assets/img/about.jpg"
              alt=""
            />
            <h1 className=" text-xl  text-blue-600 font-bold">ABOUT</h1>
            <p className=" text-center text-sm">
              Find out about our organization, mission, our methods, and the
              results of our decades of advocacy.
            </p>
            <button className=" text-blue-600 hover:underline hover:text-blue-400 hover:underline-offset-1 cursor-pointer">
              {" "}
              Learn More ⟶
            </button>
          </div>
          <div>
            <div className=" flex justify-center items-center flex-col w-[500px] gap-4">
              <img
                src="https://prium.github.io/Baikal-v2/assets/img/about.jpg"
                alt=""
              />
              <h1 className=" text-xl  text-blue-600 font-bold">PORTFOLIO</h1>
              <p className=" text-center text-sm">
                Check out some of our featured portfolio from many successful
                projects, carefully curated by us.
              </p>
              <button className=" text-blue-600 hover:underline hover:text-blue-400 hover:underline-offset-1 cursor-pointer">
                See Portfolio ⟶
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full bg-gray-800 h-24 items-center gap-12">
        <div className="  container items-center flex justify-center w-full gap-12">
          <a href="https://twitter.com/?lang=ru">
            <CiTwitter className="scale-[2] hover:scale-[1.6] duration-300 hover:shadow-white hover hover:shadow-lg hover:rounded-lg" />
          </a>
          <a href="https://www.youtube.com/">
            <FaYoutube className="scale-[2] hover:scale-[1.6] duration-300 hover:shadow-white hover hover:shadow-lg hover:rounded-lg" />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram className="scale-[2] hover:scale-[1.6] duration-300 hover:shadow-white hover hover:shadow-lg hover:rounded-lg" />
          </a>
          <a href="https://www.pinterest.com/">
            <FaPinterest className="scale-[2] hover:scale-[1.6] duration-300 hover:shadow-white hover hover:shadow-lg hover:rounded-lg" />
          </a>
        </div>
      </div>
    </section>
  );
}
