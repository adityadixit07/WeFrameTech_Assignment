// components/TopArticles.js
import React from 'react';
import ArticleCard from '../Layouts/ArticleCard';

const topArticlesData = [
  {
    thumbnail: "https://media.istockphoto.com/id/1311598658/photo/businessman-trading-online-stock-market-on-teblet-screen-digital-investment-concept.jpg?s=612x612&w=0&k=20&c=HYlIJ1VFfmHPwGkM3DtVIFNLS5ejfMMzEQ81ko534ak=",
    topic: 'BUSINESS',
    date: '20 Sep 2022',
    avatar: 'https://cdn.pixabay.com/photo/2023/11/25/14/50/ai-generated-8411866_1280.jpg',
    creatorName: 'Maria Doe',
    title: '7 Rules of Effective Branding',
    buttonStatus: 'Created',
    subtitle: 'Why Branding matters for your Business',
    tags: ['Branding', 'Communication'],
  },
  {
    thumbnail: "https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_1280.jpg",
    topic: 'ECONOMY',
    date: '20 Sep 2022',
    avatar: 'https://cdn.pixabay.com/photo/2023/11/25/14/50/ai-generated-8411866_1280.jpg',
    creatorName: 'John Doe',
    title: 'Research on biodiversity and sustainability',
    buttonStatus: 'Published',
    subtitle: 'Why Branding matters for your Business',
    tags: ['Research', 'Sustainability'],
  },
 
  {
    thumbnail: "https://media.istockphoto.com/id/1311598658/photo/businessman-trading-online-stock-market-on-teblet-screen-digital-investment-concept.jpg?s=612x612&w=0&k=20&c=HYlIJ1VFfmHPwGkM3DtVIFNLS5ejfMMzEQ81ko534ak=",
    topic: 'BUSINESS',
    date: '20 Sep 2022',
    avatar: 'https://cdn.pixabay.com/photo/2023/11/25/14/50/ai-generated-8411866_1280.jpg',
    creatorName: 'Maria Doe',
    title: '7 Rules of Effective Branding',
    buttonStatus: 'Created',
    subtitle: 'Why Branding matters for your Business',
    tags: ['Branding', 'Communication'],
  },
  
];

const TopArticles = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">Top Articles</h2>
        <button className="text-blue-500 underline">See all</button>
      </div>
      <div className="flex space-x-10 overflow-x-auto">
        {topArticlesData.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </div>
   
  );
};

export default TopArticles;
