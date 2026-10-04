"use client";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    const menuItems = [
        "হোম",
        "রাজনীতি",
        "বিশ্ব",
        "অর্থনীতি",
        "স্বাস্থ্য",
        "খেলা",
        "প্রযুক্তি",
        "দেশজুড়ে",
    ];

    return (
        <header className="w-full border-b border-gray-300 bg-[#faf9f7]">
            {/* ================= BRAND AREA ================= */}
            <div className="border-b border-gray-300 bg-[#faf9f7]">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">

                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2.5"
                    >
                        <Image
                            src="/NB_Logo.png"
                            width={500}
                            height={500}
                            alt="Picture of the author"
                            className="h-15 w-13"
                        />

                        <div>
                                                     <p className="text-lg font-bold tracking-tight text-[#222] sm:text-xl">
                            News Bangla
                        </p>
                        <p className="text-gray-400">
                        রবিবার, ৫ অক্টোবর, ২০২৬
                        </p>
                        </div>

                    </Link>

                    {/* Right information */}
                    <div className="flex items-center gap-3">
                        <button className="hidden sm:block font-medium text-[#252525] hover:text-[#d7193f]">
                            সাইন ইন

                        </button>

                        <button className="rounded-sm bg-[#d7193f] text-white px-3 py-1 font-medium hover:bg-[#c01134]">
                            সাইন আপ
                        </button>
                    </div>

                </div>
            </div>

            {/* ================= MAIN NAVIGATION ================= */}
            <div className="border-b border-gray-300 bg-white">
                <div className="mx-auto flex max-w-7xl items-center px-4 sm:px-6">

                    {/* Scrollable menu on mobile */}
                    <nav className="flex w-full text-[16px] justify-center items-center gap-7 overflow-x-auto whitespace-nowrap py-3.5 scrollbar-hide sm:gap-7">
                        {menuItems.map((item, index) => (
                            <Link
                                key={item}
                                href="#"
                                className={`text-sm transition-colors ${index === 0
                                    ? "font-bold text-[#d7193f]"
                                    : "font-medium text-[#252525] hover:text-[#d7193f]"
                                    }`}
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>

                </div>
            </div>

            {/* ================= BREAKING NEWS ================= */}
            <div className="bg-white">
                <div className="mx-auto flex max-w-7xl items-center px-4 sm:px-6">

                    {/* Breaking badge */}
                    <div className="shrink-0 bg-[#d7193f] px-3 py-2.5 text-[14px] font-bold text-white">
                        সর্বশেষ
                    </div>

                    {/* News text */}
                    <div className="min-w-0 overflow-hidden py-1">
                        <div className="flex items-center gap-6 whitespace-nowrap px-4 py-1.5 text-[14px] text-gray-700">
                            <span>
                                কীভাবে বাংলাদেশের রাজনীতিতে নতুন পরিবর্তন আসতে যাচ্ছে?
                            </span>

                            <span className="hidden sm:inline">
                                •
                            </span>

                            <span className="hidden sm:inline">
                                রাজধানীতে আজ গুরুত্বপূর্ণ বৈঠক অনুষ্ঠিত হবে
                            </span>

                            <span className="hidden md:inline">
                                •
                            </span>

                            <span className="hidden md:inline">
                                দেশের সর্বশেষ খবর
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Navbar;