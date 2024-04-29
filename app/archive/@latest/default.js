import NewsList from "@/components/news-list";
import { getLatestNews } from "@/libs/news";

const LatestNews = () => {
  const latestNews = getLatestNews();
  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
};

export default LatestNews;
