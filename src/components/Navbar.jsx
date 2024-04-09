import React,{useState} from "react";
import logo from "../assets/dribble.png";
import search from '../assets/search.png'
import { FaBriefcase } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handelMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavItems = [
    {
      name: "Inspiration",
      link: "/",
    },
    {
      name: "Find Work",
      link: "/about",
    },
    {
      name: "Learn Design",
      link: "/contact",
    },
    {
      name: "Go Pro",
      link: "/projects",
    },
    {
      name: "Hire Designers",
      link: "/blog",
    },
  ];

  return (
    <header className="border-b border-gray-200 w-full bg-white fixed top-0 left-0 right-0 max-w-screen-2xl container">
      <nav className="px-2  lg:py-1">
        <div className="flex items-center justify-between">
          <div className="flex space-x-7">
            <div className="flex items-center lg:pl-8">
              <img src={logo} alt="dribble" className="h-20" />
            </div>
            <div className="md:flex items-center space-x-7 hidden  ">
              {NavItems.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="text-gray-500 text-base  font-semibold hover:text-gray-900"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="md:flex hidden space-x-3 items-center">
            <div className="relative ">
              <input
                type="search"
                placeholder="Search"
                className="text-center w-36 py-2 rounded-lg bg-stone-200 bg-opacity-45  focus:outline-none"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <img src={search} />
              </div>
            </div>
            <FaBriefcase className="text-gray-400 h-5 w-5"/>
            <div className=" rounded-full"> 
            <IoPersonCircle className="w-10 h-10 " />
            </div>
            <button className="bg-pink-500 hover:bg-pink-600 px-3 py-2 rounded-lg text-white font-medium">Upload</button>
          </div>
          <div className="md:hidden block">
            <button onClick={handelMenuToggler}>
              {isMenuOpen ? (
                <FaXmark className=" w-5 h-5 text-primary z-50" />
              ) : (
                <FaBarsStaggered className=" w-5 h-5 text-primary" />
              )}
            </button>
          </div>
        </div>
        </nav>
        <div
        className={`px-4 bg-stone-200 bg-opacity-45  py-5 rounded-sm ${
          isMenuOpen ? "" : "hidden"
        }`}
      >
        <ul>
       { NavItems.map(({ name, path }) => (
    <a key={path} href={path} className="block text-base uppercase cursor-pointer text-pin-600 font-normal hover:text-pink-700 hover:text-xl">{name}</a>
  ))}
          <li className="text-white py-1">
            <button>Log In</button>
          </li>
        </ul>
      </div>
      
    </header>
  );
};

export default Navbar;
