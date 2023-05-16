// import { FaStar } from "react-icons/fa";
// import { FaGreaterThan } from "react-icons/fa";
// import { FaLessThan } from "react-icons/fa";
// import { FaBeer } from 'react-icons/fa';

import { GoVerified } from "react-icons/go";
import { FiExternalLink } from "react-icons/fi";
import img1 from "../images/Flipcard/card1img.png";
import { Link } from "react-router-dom";

import React, { useState } from "react";
import RibbonFlag from "./RibbonFlag";
import "./FlipCard.scss";

export default function FlipCard() {
  const [flip, setFlip] = useState(false);
  const flipCard = () => {
    setFlip(!flip);
  };
  const save = () => {
    flipCard();
  };
  return (
    <div className={`flip-card ${flip != true ? "front-flip" : "back-flip"}`}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <RibbonFlag />
          <button onClick={flipCard} type="button" class="absolute top-1 right-0 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">info</button>
          
          <img src={img1} alt="" />
          <div className="action-btns">
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
        </div>
        <div className="flip-card-back">
          <h1>This tool is verified because it is either an established company or has good social media presence</h1>
          <button onClick={save} type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Front</button>
          
        </div>
      </div>
      <div className="bg-[#01001c] rounded-b-3xl pb-1" >

      <div className="flex gap-2 ml-4 pt-2 text-white text-lg font-bold">Audioread <GoVerified className="text-blue-500 text-base"/> </div>
      <div className="ml-4 text-white" >&#9733; &#9733; &#9733; &#9733; &#9734;  (2) </div>
      <div className="flex justify-center mt-2">
        <a className="flex w-full" href="https://www.futurepedia.io/">
      <button type="button" class="flex justify-center gap-2 ml-2 w-full text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Visit <FiExternalLink/></button></a>
      <button type="button" class=" w-full text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Bookmark</button>
      </div>
      </div>
    </div>
  );
}




// const FlipCard = () => {
//   return (
//     <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
//       <div className="group relative w-full md:w-64 h-72 bg-red-100  rounded-2xl ">
//       <div className="absolute inset-0 bg-white  p-2 rounded-2xl z-10 ">
//             <h2 className="text-gray-700 ml-3 font-bold  items-center ">Tools<span className='float-right text-x m-2 border-2 border-black rounded-full p-1'><FaGreaterThan /></span></h2>
//             <p className="text-gray-700 ml-3">HOW IT WORKS?</p>
//             <img src={'https://www.classcentral.com/report/wp-content/uploads/2023/04/Pandas-BCG-Banner.png'} className='w-full h-52 p-2 rounded-2xl' />
//       </div>
//       <div className='w-52 h-[270px]  overflow-hidden rounded-2xl m-3 p-2 bg-gray-300 transform transition duration-500 group-hover:translate-x-60'><span className='float-right text-x m-2 border-2 border-black rounded-full p-1'><FaLessThan /></span>
//       <p className=" ml-3 font-bold flex items-center ">Tools</p>
//       <p className="ml-3">
//       Lorem  Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem 
//       </p>
//       </div>
//     </div>
    
//     <div className="group relative w-full md:w-64 h-72 bg-red-100  rounded-2xl ">
//       <div className="absolute inset-0 bg-white  p-2 rounded-2xl z-10 ">
//             <h2 className="text-gray-700 ml-3 font-bold  items-center ">Tools <span className='float-right text-x m-2 border-2 border-black rounded-full p-1'><FaGreaterThan /></span></h2>
//             <p className="text-gray-700 ml-3">HOW IT WORKS?</p>
//             <img src={'https://www.classcentral.com/report/wp-content/uploads/2023/04/Pandas-BCG-Banner.png'} className='w-full h-52 p-2 rounded-2xl' />
//       </div>
//       <div className='w-52 h-[270px]  overflow-hidden rounded-2xl m-3 p-2 bg-gray-300 transform transition duration-500 group-hover:translate-x-60'><span className='float-right text-x m-2 border-2 border-black rounded-full p-1'><FaLessThan /></span>
//       <p className=" ml-3 font-bold flex items-center ">Tools </p>
//       <p className="ml-3">
//       Lorem  Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem 
//       </p>
//       </div>
//     </div>

//     <div className="group relative w-full md:w-64 h-72 bg-red-100  rounded-2xl ">
//       <div className="absolute inset-0 bg-white  p-2 rounded-2xl z-10 ">
//             <h2 className="text-gray-700 ml-3 font-bold  items-center ">Tools <span className='float-right text-x m-2 border-2 border-black rounded-full p-1'><FaGreaterThan /></span></h2>
//             <p className="text-gray-700 ml-3">HOW IT WORKS?</p>
//             <img src={'https://www.classcentral.com/report/wp-content/uploads/2023/04/Pandas-BCG-Banner.png'} className='w-full h-52 p-2 rounded-2xl' />
//       </div>
//       <div className='w-52 h-[270px]  overflow-hidden rounded-2xl m-3 p-2 bg-gray-300 transform transition duration-500 group-hover:translate-x-60'><span className='float-right text-x m-2 border-2 border-black rounded-full p-1'><FaLessThan /></span>
//       <p className=" ml-3 font-bold flex items-center ">Tools </p>
//       <p className="ml-3">
//       Lorem  Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem 
//       </p>
//       </div>
//     </div>

//     </div>
//   );
// };

// export default FlipCard;

// import { useState } from "react";

// function Card() {
//   const [isFlipped, setIsFlipped] = useState(false);

//   const flipCard = () => {
//     setIsFlipped(!isFlipped);
//   };

//   return (
//     <div
//       className={`${
//         isFlipped ? "rotate-y-180" : ""
//       } w-64 h-64 border-2 border-gray-300 rounded-md shadow-md`}
//       onMouseEnter={flipCard}
//       onMouseLeave={flipCard}
//     >
//       <div className="w-full h-full flex items-center justify-center">
//         <div className="text-4xl text-gray-500">{isFlipped ? "Front" : "Back"}</div>
//       </div>
//     </div>
//   );
// }

// export default Card;

// import { useState } from 'react';

// function App() {
//   const [isFlipped, setIsFlipped] = useState(false);

//   const flipCard = () => {
//     setIsFlipped(!isFlipped);
//   };

//   return (
//     <div
//       className={`w-64 h-64 bg-blue-500 transform transition-transform duration-500 ${
//         isFlipped ? 'rotate-x-180' : ''
//       }`}
//       onClick={flipCard}
//     >
//       <div className="front">Front</div>
//       <div className="back">Back</div>
//     </div>
//   );
// }

// export  default App;