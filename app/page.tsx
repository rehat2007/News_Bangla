import Header from "@/components/Header";
import HomePage from "@/components/HomePage";
import MostReadPage from "@/components/MostReadPage";
import { getCategories, getLatestHeadlines, getHomePage} from "@/lib/api";


const categories = await getCategories();
const latestHeadlines = await getLatestHeadlines();
const homepageNews = await getHomePage();

export default function Home() {
  return (
    <>
      <Header
       categories={categories.data} 
       headline={latestHeadlines.data} />
       <HomePage allNews={homepageNews} />
       <MostReadPage/>
    </>
  );
}