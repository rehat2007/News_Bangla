import Image from "next/image";

interface Article {
  id: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  firstPublished: string;
}

interface MainNews {
  title: string;
  articles: Article[];
}

interface NewsPageProps {
  mainNews: MainNews;
}

const NewsPage = ({ mainNews }: NewsPageProps) => {
  const [firstArticle, ...allArticle] = mainNews.articles;

  const firstFive = allArticle.slice(0, 5);

  return (
    <main className="bg-[#faf9f6] px-4 py-6 sm:px-6 md:px-8 md:py-10">
      <div className="mx-auto max-w-[1222px]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(360px,0.9fr)] lg:gap-12">
          {/* ================= MAIN ARTICLE ================= */}
          <article>
            {/* Main Image */}
            <div className="h-[240px] w-full overflow-hidden rounded-[4px] bg-gradient-to-br from-[#765b5a] via-[#b58f86] to-[#d09f8d] sm:h-[300px] md:h-[360px] lg:h-[390px]">
              <Image
                src={firstArticle.imageUrl}
                alt={firstArticle.imageAlt}
                width={660}
                height={315}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>

            {/* Category */}
            <div className="mt-4">
              <span className="inline-block rounded-[2px] bg-[#e21d2d] px-3 py-[5px] text-[10px] font-bold tracking-wide text-white">
                {mainNews.title}
              </span>
            </div>

            {/* Title */}
            <h1 className="mt-3 max-w-[780px] text-[25px] font-bold leading-[1.3] tracking-[-0.3px] text-[#111] sm:text-[29px] md:text-[34px] lg:text-[38px]">
              {firstArticle.title}
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-[760px] text-[12px] leading-[1.8] text-[#666] sm:text-[13px] md:text-[14px]">
              {firstArticle.description}
            </p>

            {/* Date */}
            <p className="mt-4 text-[10px] font-medium text-[#999]">
              {firstArticle.firstPublished}
            </p>
          </article>

          {/* ================= RIGHT SIDEBAR ================= */}
          <aside className="border-t border-[#dedbd6] lg:border-t-0 lg:pt-0">
            {firstFive.map((item) => {

              return (
                <div
                  key={item.id}
                  className="flex gap-3 border-b border-[#dedbd6] py-4 first:pt-0 last:border-b-0"
                >
                  <div className="h-[78px] w-[120px] shrink-0 overflow-hidden rounded-[4px] bg-gradient-to-br from-[#527674] to-[#9bb9ad] sm:h-[82px] sm:w-[130px]">
                    <Image
                      src={item.imageUrl}
                      alt={item.imageAlt}
                      width={118}
                      height={74}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <span className="text-[9px] font-bold uppercase tracking-wide text-[#df1f2f] sm:text-[10px]">
                      {item.title}
                    </span>

                    <h2 className="mt-1 line-clamp-4 text-[12px] font-semibold leading-[1.5] text-[#222] sm:text-[13px]">
                      {item.description}
                    </h2>
                  </div>
                </div>
              );
            })}
          </aside>
        </div>
      </div>
    </main>
  );
};

export default NewsPage;