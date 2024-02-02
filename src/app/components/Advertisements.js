// pages/advertisements.js
import React from "react";
import AdvertisementCard from "../Layouts/AdvertisementCard";

const advertisements = [
  {
    imageUrl: "path/to/image1.jpg",
    title: "Build Your Business",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    imageUrl: "path/to/image2.jpg",
    title: "Grow Your Audience",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Advertisements = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">Top Articles</h2>
        <button className="text-blue-500 underline">See all</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        {advertisements.map((ad, index) => (
          <AdvertisementCard key={index} {...ad} />
        ))}
      </div>
    </div>
  );
};

export default Advertisements;
