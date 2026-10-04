const CATEGORIES_URL ="https://news-api-v2.vercel.app/api/categories";
const LATEST_HEADLINES_URL ="https://news-api-v2.vercel.app/api/news";
const HOME_PAGE_URL ="https://news-api-v2.vercel.app/api/news/sections";
const MOST_READ_URL ="https://news-api-v2.vercel.app/api/news/most-read";
const ONE_CATEGORY_URL ="https://news-api-v2.vercel.app/api/category/technology";

const getCategories = async () => {
  const res = await fetch(CATEGORIES_URL);
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  return res.json();
};

const getLatestHeadlines = async () => {
  const res = await fetch(LATEST_HEADLINES_URL);
  if (!res.ok) {
    throw new Error("Failed to fetch latest headlines");
  }
  return res.json();
};

const getHomePage = async () => {
  const res = await fetch(HOME_PAGE_URL);
  if (!res.ok) {
    throw new Error("Failed to fetch home page data");
  }
  return res.json();
};

const getMostRead = async () => {
  const res = await fetch(MOST_READ_URL);
  if (!res.ok) {
    throw new Error("Failed to fetch most read news");
  }
  return res.json();
};

const getTechnologyNews = async () => {
  const res = await fetch(ONE_CATEGORY_URL);
  if (!res.ok) {
    throw new Error("Failed to fetch technology news");
  }
  return res.json();
};

export {
  getCategories,
  getLatestHeadlines,
  getHomePage,
  getMostRead,
  getTechnologyNews,
};