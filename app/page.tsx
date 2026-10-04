import SelectedNews from "@/components/ElectedNewsPage";
import Header from "@/components/Header";
import NewsPage from "@/components/NewsPage";
import { getCategories, getLatestHeadlines } from "@/lib/api";


const categories = await getCategories();
const latestHeadlines = await getLatestHeadlines();

export default function Home() {
  return (
    <>
      <Header
       categories={categories.data} 
       headline={latestHeadlines.data} />
       <NewsPage/>
       <SelectedNews/>
    </>
  );
}