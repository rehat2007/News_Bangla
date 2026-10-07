import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface Category {
    slug: string;
    title: string;
}

interface News {
    id: string;
    title: string;
    type: string;
}

interface HomeProps {
    categories: Category[];
    headline: News[];
}


const Header = ({ categories, headline }: HomeProps) => {

    const [firsCategorieData, ...categorieData] = categories

    const filterHeadLine = headline.filter((item) => item.type === "article");

    return (
        <section className="w-full bg-white">
            {/* ================= MAIN NAVIGATION ================= */}
            <div className="border-b border-gray-300">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <nav className="flex justify-center items-center  overflow-x-auto whitespace-nowrap scrollbar-hide sm:gap-7">
                        {categorieData.map((item, index) => (
                            <Link
                                key={item.slug}
                                href="#"
                                className={`shrink-0 py-3 text-sm transition-colors ${index === 0
                                    ? "font-bold text-[#d7193f]"
                                    : "font-medium text-[#252525] hover:text-[#d7193f]"
                                    }`}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>

            {/* ================= BREAKING NEWS ================= */}
            <div className="border-b border-gray-200">
                <div className="mx-auto flex max-w-7xl items-center px-4 sm:px-6">

                    {/* Breaking News Label */}
                    <div className="shrink-0 bg-[#d7193f] h-full px-3 py-3 text-xs font-bold text-white">
                        সর্বশেষ
                    </div>

                    {/* News Content */}
                    <div className="min-w-0 flex-1 overflow-hidden">
                        <div className="flex items-center gap-5 overflow-x-auto whitespace-nowrap py-1.5">
                            <MarqueeText direction="left" duration={15}>
                                {filterHeadLine.map((item) => (
                                    <span key={item.id} className="text-xs">
                                        <span className="text-xs font-bold px-4 "> ● </span>
                                        <Link href="#">
                                            {item.title}
                                        </Link>
                                    </span>

                                ))}
                            </MarqueeText>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Header