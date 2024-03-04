import React from "react";
import logo from "./Images/download.png";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { GiHamburgerMenu } from "react-icons/gi";

export function MYHeader() {
  return (
    <header className="bg-img   lg:h-[100vh] h-full bg-no-repeat bg-cover">
      <div className="flex justify-around container sticky l-0 t-0   w-full  h-28 items-center">
        <div>
          <img src={logo} alt="" className=" w-36" />
        </div>
        <div className=" gap-24 hidden lg:inline-block">
          <Menu
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
          >
            <MenuHandler className="bg-inherit shadow-none">
              <Button className="">Homes</Button>
            </MenuHandler>
            <MenuList className=" bg-inherit text-white  text-sm">
              <MenuItem>Default</MenuItem>
              <MenuItem>Classic </MenuItem>
              <MenuItem>Home Slider</MenuItem>
            </MenuList>
          </Menu>
          <Menu
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
          >
            <MenuHandler className="bg-inherit shadow-none">
              <Button>About</Button>
            </MenuHandler>
            <MenuList className=" bg-inherit text-white text-sm">
              <MenuItem>What we do</MenuItem>
              <MenuItem>Projects</MenuItem>
              <MenuItem>Contact</MenuItem>
              <MenuItem>Partners</MenuItem>
            </MenuList>
          </Menu>
          <Menu
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
          >
            <MenuHandler className="bg-inherit shadow-none">
              <Button>News</Button>
            </MenuHandler>
            <MenuList className=" bg-inherit text-white text-sm">
              <MenuItem>Archive</MenuItem>
              <MenuItem>Standard</MenuItem>
              <MenuItem>Featured</MenuItem>
              <MenuItem>Slider</MenuItem>
            </MenuList>
          </Menu>
          <Menu
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
          >
            <MenuHandler className="bg-inherit shadow-none">
              <Button>Elements</Button>
            </MenuHandler>
          </Menu>
          <button className=" text-xs px-4 py-2 border text-white hover:text-black hover:bg-white duration-300 border-white rounded-full">
            Purchase
          </button>
        </div>
        <GiHamburgerMenu className="lg:hidden scale-[2]" color="white" />
      </div>
      <div className="bg-img1 text-white flex flex-col justify-center items-center  mt-24 gap-20 container">
        <h1 className=" text-2xl font-serif">Success Stories</h1>
        <h1 className="lg:text-7xl bold font-sans lg:text-start text-center text-4xl">
          START WITH YOU
        </h1>
        <button className=" mb-8 lg:mb-0 bg-blue-300 text-white font-sans hover:bg-blue-400  cursor-pointer rounded-full px-8 py-3 text-sm duration-300">
          LEARN MORE
        </button>
      </div>
    </header>
  );
  //   const [openNav, setOpenNav] = React.useState(false);

  //   React.useEffect(() => {
  //     window.addEventListener(
  //       "resize",
  //       () => window.innerWidth >= 960 && setOpenNav(false)
  //     );
  //   }, []);
}
