import Image from "next/image";

const NewsCard = ({ data }) => {

  const [firstdata, ...remainingdata] = data.articles;

  return (
    <div className="w-full max-w-sm p-3 sm:max-w-md md:max-w-lg">
      {/* Category */}
      <div className="mb-3 flex items-center gap-2">
        <span className="h-4 w-0.5 bg-red-600"></span>

        <h2 className="text-sm font-semibold text-gray-800">
          {data.title}
        </h2>
      </div>

      {/* Main News */}
      <div>
        {/* Image */}
        <div className="h-28 w-full overflow-hidden rounded-[3px] sm:h-36 md:h-40">
          <Image
          height={200}
          width={300}
            src={firstdata.imageUrl}
            alt={firstdata.imageAlt}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Main headline */}
        <h3 className="mt-2 text-[13px] font-semibold leading-[1.45] text-gray-900 sm:text-sm">
          {firstdata.title}
        </h3>
      </div>

      {/* News Item 2 */}

{remainingdata.map((item) => (
  <div
    key={item.id}
    className="border-b border-gray-200 py-2.5 mt-5"
  >
    <h3 className="text-[11px] font-medium leading-[1.5] text-gray-800 sm:text-xs">
      {item.title}
    </h3>
  </div>
))}
    </div>

  );
};

export default NewsCard;