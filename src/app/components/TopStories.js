import React from "react";
import TopStoryCard from "../Layouts/TopStoryCard";
import Link from "next/link";

const topStoriesData = [
  {
    backgroundImage: "https://cdn.pixabay.com/photo/2019/04/06/06/44/astronaut-4106766_1280.jpg",
    title: "How 7 lines of code turned into a $36 Billion Empire",
    topic: "BUSINESS",
    date: "20 Sep 2022",
    status: "Published",
    viewCount: 428,
  },
  {
    backgroundImage: "https://cdn.pixabay.com/photo/2019/04/06/06/44/astronaut-4106766_1280.jpg",
    title: "The Impact of Artificial Intelligence on Future Technologies",
    topic: "TECHNOLOGY",
    date: "22 Sep 2022",
    status: "Published",
    viewCount: 645,
  },
  {
    backgroundImage: "https://cdn.pixabay.com/photo/2019/04/06/06/44/astronaut-4106766_1280.jpg",
    title: "Exploring Sustainable Solutions for a Greener Planet",
    topic: "ENVIRONMENT",
    date: "25 Sep 2022",
    status: "Published",
    viewCount: 512,
  },
  
];

const TopStories = () => {
   
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl text-black font-semibold">Top Stories</h1>
        <Link  href={'/'} className="text-blue-500 underline">
        see All
        </Link>

      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
     
     {topStoriesData.map((story, index) => (
       <TopStoryCard key={index} {...story} />
     ))}
   </div>
    </div>
    
  );
};

export default TopStories;