import Image from "next/image";
import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import threedots from '../assets/icons/threedots.png'
import Button from "./Button";

const ArticleCard = ({
  thumbnail,
  topic,
  date,
  avatar,
  creatorName,
  title,
  buttonStatus,
  subtitle,
  tags,
}) => {
  return (
    <div className="article-card bg-white rounded-md shadow-sm p-3 my-4 w-full sm:w-full md:w-[50%] lg:w-[35%] transform hover:scale-105 transition-transform duration-300">
      <div className="thumbnail-container mb-4 h-48 overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="published-detail flex justify-between items-center mb-4">
        <div className="flex gap-4 items-center">
          <span className="text-[#9058FF] text-sm">{topic} </span>
          <span className="text-[#A0A3BD] text-xs font-semibold">{date}</span>
        </div>
        <div className="avatar flex items-center gap-2">
          <img
            src={avatar}
            alt={creatorName}
            className="w-6 h-6 rounded-full"
          />
          <span className="text-black text-sm">{creatorName}</span>
        </div>
      </div>
      <div>
        <div className="article-title flex items-center justify-between">
          <h3 className="text-sm font-semibold mb-2 text-[#22285E] hover:underline">
            {title.length > 25 ? `${title.substring(0, 25)}, ...` : `${title}`}
          </h3>
          <button className="text-violet-500 px-2 py-1 bg-[#E3D5FF] rounded-md">
            {buttonStatus}
          </button>
        </div>
        <div className="mt-3">
          <p className="text-gray-500 text-sm">{subtitle}</p>
        </div>
      </div>
      {/* tags */}
      <div className="tags mt-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-200  text-xs px-2 py-1 mr-2 rounded text-gray-400"
          >
            {tag}
          </span>
        ))}
      </div>
      <Button/>
    </div>
  );
};

export default ArticleCard;





