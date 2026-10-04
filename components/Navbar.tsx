"use client";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {

    return (
        <nav className="w-full border-b border-gray-300 bg-[#faf9f7]">
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
        </nav>
    );
};

export default Navbar;