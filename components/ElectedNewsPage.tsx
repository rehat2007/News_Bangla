"use client";

import { useState } from "react";

const SelectedNews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const news = [
    {
      title: "সেরা ওয়াইল্ডলাইফ ফটোগ্রাফার খেতাবের জন্য লড়াইয়ে এবার কেরকটি ছবি",
      date: "৫ সেপ্টেম্বর, ২০২৬",
      image: "from-[#435668] via-[#70869a] to-[#a8bac9]",
    },
    {
      title: "জানালেন বিপন মেহতা চিন্তার আওতায় কেন এখনো আছেন মন্ত্রী",
      date: "৬ সেপ্টেম্বর, ২০২৬",
      image: "from-[#704e4d] via-[#a87a70] to-[#d29d8d]",
    },
    {
      title: "সাড়ে তিনশ বছরকে বাংলায় ফেরার নানকাতে যেন না হওয়ার পরেও আছে যে গল্প",
      date: "৮ সেপ্টেম্বর, ২০২৬",
      image: "from-[#426866] via-[#719993] to-[#9fc5b9]",
    },
    {
      title: "বিভ্রান্তির কিনারা থেকে ফিরে আসা গেল কেন এই তিনশ বছরের যাত্রা?",
      date: "৮ সেপ্টেম্বর, ২০২৬",
      image: "from-[#74654e] via-[#ae9974] to-[#cbb28a]",
    },
    {
      title: "দেশের অর্থনীতিতে নতুন সম্ভাবনার দুয়ার খুলতে পারে এই সিদ্ধান্ত",
      date: "৯ সেপ্টেম্বর, ২০২৬",
      image: "from-[#526174] via-[#7f91a3] to-[#b5c2cf]",
    },
    {
      title: "নতুন পরিকল্পনায় বদলে যাচ্ছে দেশের যোগাযোগ ব্যবস্থা",
      date: "১০ সেপ্টেম্বর, ২০২৬",
      image: "from-[#594c68] via-[#817291] to-[#b2a3c0]",
    },
    {
      title: "বাংলাদেশের জন্য নতুন অর্থনৈতিক পরিকল্পনা ঘোষণা",
      date: "১১ সেপ্টেম্বর, ২০২৬",
      image: "from-[#536b61] via-[#78998b] to-[#a9c2b5]",
    },
    {
      title: "প্রযুক্তির নতুন পরিবর্তনে বদলে যাচ্ছে মানুষের জীবন",
      date: "১২ সেপ্টেম্বর, ২০২৬",
      image: "from-[#62566d] via-[#897b96] to-[#b7aabd]",
    },
  ];

  const nextSlide = () => {
    if (currentSlide < news.length - 4) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const previousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <section className="w-full bg-[#faf9f6] py-7">
      <div className="mx-auto max-w-[1222px] px-4 md:px-0">

        {/* Section Header */}
        <div className="mb-4 flex items-center border-b border-[#e5e2dd] pb-2">
          <div className="mr-2 h-[15px] w-[3px] bg-[#e21b2d]" />

          <h2 className="text-[14px] font-bold text-[#222]">
            নির্বাচিত খবর
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
            {news.map((item, index) => (
              <article
                key={index}
                className="w-1/4 shrink-0 px-[7px]"
              >
                {/* Image */}
                <div
                  className={`h-[202px] w-full rounded-[3px] bg-gradient-to-br ${item.image}`}
                />

                {/* Category */}
                <div className="mt-1.5">
                  <span className="text-[8px] font-medium text-[#df1d2d]">
                    নির্বাচিত খবর
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-1 text-[11px] font-bold leading-[1.45] text-[#222]">
                  {item.title}
                </h3>

                {/* Date */}
                <p className="mt-1 text-[7px] text-[#999]">
                  {item.date}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* ================= BUTTONS ================= */}

        <div className="mt-5 flex items-center justify-between">

          {/* Previous Button */}
          <button
            onClick={previousSlide}
            disabled={currentSlide === 0}
            className={`flex h-8 w-8 items-center justify-center rounded-full border text-lg transition ${
              currentSlide === 0
                ? "cursor-not-allowed border-[#ddd] text-[#ccc]"
                : "border-[#222] text-[#222] hover:bg-[#222] hover:text-white"
            }`}
          >
            ←
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            disabled={currentSlide >= news.length - 4}
            className={`flex h-8 w-8 items-center justify-center rounded-full border text-lg transition ${
              currentSlide >= news.length - 4
                ? "cursor-not-allowed border-[#ddd] text-[#ccc]"
                : "border-[#222] text-[#222] hover:bg-[#222] hover:text-white"
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