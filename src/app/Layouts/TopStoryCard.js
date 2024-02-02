import Image from "next/image";
import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import statusup from "../assets/icons/statusup.png";
import Vector from "../assets/icons/Vector.png";
import { HiDotsHorizontal } from "react-icons/hi";
import threedots from "../assets/icons/threedots.png";
import Button from "./Button";

const TopStoryCard = ({
  backgroundImage,
  title,
  topic,
  date,
  status,
  viewCount,
}) => {
  return (
    <div className="relative bg-cover bg-center h-[428px] transform hover:scale-105 transition-transform duration-300">
      <div
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className="absolute inset-0 bg-cover bg-center rounded-md"
      ></div>

      {/* View Count at the Top (Aligned to Right) */}
      <div className="flex absolute top-4 right-4 items-center justify-end ">
        <div className="bg-white  flex flex-row items-center rounded-md mx-2 px-2 py-1">
          <span>
            <Image src={Vector} alt={viewCount} />
          </span>
          <span className="ml-2 text-violet-500">{viewCount}</span>
        </div>
        <span className="bg-white px-2 py-2 border-none rounded-md">
          <Image src={statusup} alt={title} />
        </span>
      </div>
      <div className="absolute inset-0 flex flex-col justify-end p-3 text-white mt-10">
        <div>
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <div className="flex items-center flex-row justify-between">
            <div>
              <span className="text-sm uppercase mr-2">{topic}</span>
              <span className="text-sm">{date}</span>
            </div>
            <button className="bg-white text-violet-400 px-2 py-1 rounded-md">
              {status}
            </button>
          </div>
        </div>

        <Button/>
      </div>
    </div>
  );
};

export default TopStoryCard;
