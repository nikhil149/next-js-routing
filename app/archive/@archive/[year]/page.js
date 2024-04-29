import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/libs/news";

const NewsFilteredPage = ({ params }) => {
  const year = params.year;

  const news = getNewsForYear(year);
  return <NewsList news={news} />;
};

export default NewsFilteredPage;
