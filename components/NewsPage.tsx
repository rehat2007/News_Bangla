const NewsPage = () => {
  return (
    <main className=" bg-[#faf9f6]  py-6 md:px-8">
      <div className="mx-auto max-w-[1222px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1fr]">

          {/* ================= MAIN ARTICLE ================= */}
          <article>
            {/* Main Image */}
            <div className="h-[260px] w-[660] overflow-hidden rounded-[3px] bg-gradient-to-br from-[#765b5a] via-[#b58f86] to-[#d09f8d] md:h-[315px]">
              {/* Add actual image here later if needed */}
            </div>

            {/* Category */}
            <div className="mt-2">
              <span className="inline-block bg-[#e21d2d] px-2 py-[3px] text-[10px] font-semibold text-white">
                প্রধান খবর
              </span>
            </div>

            {/* Title */}
            <h1 className="mt-2 text-[23px] font-bold leading-[1.35] text-[#111] md:text-[27px]">
              কর্মীদের 'অপরাধ' নিয়ন্ত্রণ কি বিএনপির জন্য কঠিন
              হয়ে উঠেছে?
            </h1>

            {/* Description */}
            <p className="mt-3 max-w-[650px] text-[11px] leading-[1.7] text-[#777] md:text-[12px]">
              রাজনৈতিক অস্থিরতা দেখা দিলে অনেক কঠিন হয়ে উঠেছে কি না,
              এই প্রশ্ন ঘুরছে বিভিন্ন মহলে, কয়েকটি নির্বাচনী ফলাফল
              কাটিয়ে যাওয়ার পরেও।
            </p>

            {/* Date */}
            <p className="mt-3 text-[9px] text-[#999]">
              ৩ অক্টোবর, ২০২৪ • ৭:৪০
            </p>
          </article>

          {/* ================= RIGHT SIDEBAR ================= */}
          <aside className="space-y-0">

            {/* News Item 1 */}
            <div className="flex gap-3 border-b border-[#e5e5e5] pb-3">
              <div className="h-[74px] w-[118px] shrink-0 rounded-[3px] bg-gradient-to-br from-[#527674] to-[#9bb9ad]" />
              <div>
                <span className="text-[9px] font-semibold text-[#df1f2f]">
                  প্রধান খবর
                </span>

                <h2 className="mt-[2px] text-[11px] font-semibold leading-[1.45] text-[#222]">
                  পাল্লায় ধানের আমলে সত্যিই কি
                  টাকার হাতটা এত ভালো আছে?
                </h2>
              </div>
            </div>

            {/* News Item 2 */}
            <div className="flex gap-3 border-b border-[#e5e5e5] py-3">
              <div className="h-[74px] w-[118px] shrink-0 rounded-[3px] bg-gradient-to-br from-[#6d6653] to-[#d0bb91]" />

              <div>
                <span className="text-[9px] font-semibold text-[#df1f2f]">
                  প্রধান খবর
                </span>

                <h2 className="mt-[2px] text-[11px] font-semibold leading-[1.45] text-[#222]">
                  মাংসের দাম নিয়ে মন্ত্রীকে কথা বলতে
                  হলো কেন?
                </h2>
              </div>
            </div>

            {/* News Item 3 */}
            <div className="flex gap-3 border-b border-[#e5e5e5] py-3">
              <div className="h-[74px] w-[118px] shrink-0 rounded-[3px] bg-gradient-to-br from-[#565579] to-[#a09dcf]" />

              <div>
                <span className="text-[9px] font-semibold text-[#df1f2f]">
                  প্রধান খবর
                </span>

                <h2 className="mt-[2px] text-[11px] font-semibold leading-[1.45] text-[#222]">
                  বঙ্গবন্ধুর কাশেমকে 'করণ'
                  দিয়ে আঘাত করেছিলেন কেন?
                </h2>
              </div>
            </div>

            {/* News Item 4 */}
            <div className="flex gap-3 py-3">
              <div className="h-[74px] w-[118px] shrink-0 rounded-[3px] bg-gradient-to-br from-[#536977] to-[#9db1bb]" />

              <div>
                <span className="text-[9px] font-semibold text-[#df1f2f]">
                  প্রধান খবর
                </span>

                <h2 className="mt-[2px] text-[11px] font-semibold leading-[1.45] text-[#222]">
                  রাজধানী নিয়ন্ত্রণে ইরানের পর ১০
                  কোটি মানুষ কেন ঘুরছেন বিশেষত
                  জি-এন-এর
                </h2>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
};

export default NewsPage;