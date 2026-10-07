import React from "react";
import NewsCard from "./newsCategory";

const OthersNews = ({ othersNews }) => {

  const selectedNews = [...othersNews].filter((item) =>
  ['বাংলাদেশ', 'ভারত', 'বিশ্ব'].includes(item.title)
);
  
console.log(selectedNews);


  return (
    <div className="w-full bg-[#faf9f6] px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        {selectedNews.map((item)=> <NewsCard key={item.curationId} data ={item}/>) }
      </div>
    </div>
  );
};

export default OthersNews;