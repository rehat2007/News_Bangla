

const NewsCard = ({othernewses}) => {

console.log(selectedNews);

  return (
        <div className="w-full max-w-sm p-3 sm:max-w-md md:max-w-lg">
      {/* Category */}
      <div className="mb-3 flex items-center gap-2">
        <span className="h-4 w-0.5 bg-red-600"></span>

        <h2 className="text-sm font-semibold text-gray-800">
          বাংলাদেশ
        </h2>
      </div>

      {/* Main News */}
      <div>
        {/* Image */}
        <div className="h-28 w-full overflow-hidden rounded-[3px] sm:h-36 md:h-40">
          <img
            src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620"
            alt="News"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Main headline */}
        <h3 className="mt-2 text-[13px] font-semibold leading-[1.45] text-gray-900 sm:text-sm">
          বিএনবন্দরের কোন ঘটনার প্রেক্ষাপট
          আটক স্বরাষ্ট্রসচিব?
        </h3>

        {/* Date */}
        <p className="mt-1.5 text-[9px] text-gray-400 sm:text-[10px]">
          ২ ঘণ্টা আগে, ২০২৬
        </p>
      </div>

      {/* News Item 2 */}
      <div className="border-b border-gray-200 py-2.5">
        <h3 className="text-[11px] font-medium leading-[1.5] text-gray-800 sm:text-xs">
          সাংবাদিক তৌফিক রেজা আলীকে রাতের গ্রেফতার
        </h3>

        <p className="mt-1 text-[9px] text-gray-400 sm:text-[10px]">
          ২ ঘণ্টা আগে, ২০২৬
        </p>
      </div>

      {/* News Item 3 */}
      <div className="border-b border-gray-200 py-2.5">
        <h3 className="text-[11px] font-medium leading-[1.5] text-gray-800 sm:text-xs">
          জাতীয়ভাবে দাবি করা হচ্ছে, তবে পরিস্থিতির সম্ভাবনা
        </h3>

        <p className="mt-1 text-[9px] text-gray-400 sm:text-[10px]">
          ২ ঘণ্টা আগে, ২০২৬
        </p>
      </div>

      {/* News Item 4 */}
      <div className="py-2.5">
        <h3 className="text-[11px] font-medium leading-[1.5] text-gray-800 sm:text-xs">
          আন্দোলনের মাঝেই ফেরকে পেট্রোলের দাম বাড়ছে কোথায়?
        </h3>

        <p className="mt-1 text-[9px] text-gray-400 sm:text-[10px]">
          ২ ঘণ্টা আগে, ২০২৬
        </p>
      </div>
    </div>

  );
};

export default NewsCard;