"use client";

import Image from "next/image";
import { useState } from "react";

interface SelectedArticle {
  id: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  date: string;
}

interface SelectedNewsData {
  title: string;
  articles: SelectedArticle[];
}

interface SelectedNewsProps {
  seclactedNews: SelectedNewsData;
}

const SelectedNews = ({ seclactedNews }: SelectedNewsProps) => {
  const articles = seclactedNews.articles;
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < articles.length - 4) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const previousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <section className="w-full bg-[#faf9f6] py-8 sm:py-10">
      <div className="mx-auto max-w-[1222px] px-4 sm:px-6 md:px-8 lg:px-0">

        {/* ================= SECTION HEADER ================= */}
        <div className="mb-5 flex items-center border-b border-[#dedbd6] pb-3">
          <div className="mr-2 h-[17px] w-[3px] bg-[#e21b2d]" />

          <h2 className="text-[15px] font-bold tracking-[-0.2px] text-[#222] sm:text-[16px]">
            {seclactedNews.title}
          </h2>
        </div>

        {/* ================= NEWS CAROUSEL ================= */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 25}%)`,
            }}
          >
            {articles.map((item, index) => (
              <article
                key={item.id}
                className="w-1/4 shrink-0 px-2 sm:px-2.5"
              >
                {/* Image */}
                <div className="group relative aspect-[1.55/1] w-full overflow-hidden rounded-[3px] bg-gradient-to-br from-[#765b5a] via-[#b58f86] to-[#d09f8d]">
                  <Image
                    src={item.imageUrl}
                    alt={item.imageAlt}
                    width={98}
                    height={54}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Category */}
                <div className="mt-2">
                  <span className="text-[8px] font-semibold uppercase tracking-wide text-[#df1d2d] sm:text-[9px]">
                    {seclactedNews.title}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-1 line-clamp-3 text-[11px] font-bold leading-[1.5] text-[#222] sm:text-[12px]">
                  {item.title}
                </h3>

                {/* Date */}
                <p className="mt-2 text-[8px] font-medium text-[#999] sm:text-[9px]">
                  {item.date}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* ================= BUTTONS ================= */}
        <div className="mt-6 flex items-center justify-between">

          {/* Previous Button */}
          <button
            onClick={previousSlide}
            disabled={currentSlide === 0}
            className={`flex h-9 w-9 items-center justify-center rounded-full border text-[16px] transition-all duration-200 ${currentSlide === 0
                ? "cursor-not-allowed border-[#dedbd6] text-[#c9c6c1]"
                : "border-[#222] text-[#222] hover:border-[#e21b2d] hover:bg-[#e21b2d] hover:text-white"
              }`}
          >
            ←
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            disabled={currentSlide >= articles.length - 4}
            className={`flex h-9 w-9 items-center justify-center rounded-full border text-[16px] transition-all duration-200 ${currentSlide >= articles.length - 4
                ? "cursor-not-allowed border-[#dedbd6] text-[#c9c6c1]"
                : "border-[#222] text-[#222] hover:border-[#e21b2d] hover:bg-[#e21b2d] hover:text-white"
              }`}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default SelectedNews;