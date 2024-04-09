import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import CardData from "../Data/CardData";
import {useMediaQuery} from 'react-responsive';
const Slide3 = () => {
  
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (id) => {
    setCheckedItems({
      ...checkedItems,
      [id]: !checkedItems[id]
    });
  };

  const handleback=()=>{
    window.location.reload();
   window.location.href="/createProfile";  
  }
  const handleFinish=()=>{
    window.location.reload();
   window.location.href="/verification";
  }

  return (
    <div className="py-4 px-2  ">
      <button className="lg:p-4 p-2   lg:ml-44 bg-slate-300 rounded-lg bg-opacity-30" onClick={handleback}>
        <FaChevronLeft className=" text-gray-500 " />
      </button>
      <div className="lg:py-16 px-2   grid place-content-center">
        <div className=" text-center mt-6 ">
          <h1 className="font-bold text-2xl lg:text-4xl text-center">What brings you to Dribble?</h1>
          <p className="text-gray-500 font-normal pt-4">
            Select the options that best describe you. Don't worry, you can
            explore other options later.
          </p>
        </div>
        <div className="  lg: pb-4 mt-32 flex flex-col items-center md:flex-row space-y-4 md:space-x-8 ">
          {CardData.map((card) => (
            <div
              key={card.id}
              className={`  md:p-6 relative md:w-72 w-52  md:h-[300px]  h-[200px] border-[3px] text-center   rounded-2xl ${
                checkedItems[card.id] ? "border-pink-600 z-" : "border-gray-100"
              }`}
            >
              <div className={`h-full flex flex-col justify-center pb-8 ${checkedItems[card.id]?' md:absolute md:top-0 md:left-0 md:right-0 md:transform md:-translate-y-1/2':''}`}>
                <img
                  src={card.imgSrc}
                  alt="Example"
                  className={`md:h-44 h-20 mx-auto ${checkedItems[card.id] ? "" : ""}`}
                />
                <p className="font-bold lg:text-xl text-lg mb-4 px-4">{card.text}</p>
              </div>
              {isLargeScreen && checkedItems[card.id] && (
                <p className="font-normal text-sm text-gray-400 absolute bottom-28 left-0 right-0 mx-auto">
                  {card.desc}
                </p>
              )}
              <label className={`inline-block absolute bottom-4 left-0 right-0 mx-auto`}>
                <input
                  type="checkbox"
                  checked={checkedItems[card.id]}
                  onChange={() => handleCheckboxChange(card.id)}
                  className="h-6 w-6 p-2  appearance-none checked:bg-pink-500 checked:border-transparent rounded-full mt-2 text-gray-300 border border-gray-300 focus:outline-none"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="h-6 w-6 absolute bottom-2 left-2 transform -translate-x-1/2 -translate-y-1/2"
                  style={{ display: checkedItems[card.id] ? "block" : "none" }}
                >
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M7.293 14.293a1 1 0 0 1-1.414-1.414l4-4a1 1 0 0 1 1.414 1.414l-4 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="font-semibold ">Anything else? You can select multiple</p>
          <button className=' mt-5 w-52 py-2 bg-pink-500 rounded-lg text-white font-semibold ' onClick={handleFinish}>Finish</button>
        </div>
        <button className="text-gray-400 mt-2 font-medium text-sm bg-transparent border-none" onClick={handleback}>or Press RETURN</button>
      </div>
    </div>
  );
};

export default Slide3;
