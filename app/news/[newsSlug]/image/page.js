import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

const ImagePage = ({ params }) => {
  const newsSlug = params.newsSlug;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsSlug);
  if (!newsItem) {
    notFound();
  }
  return (
    <div>
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
};

export default ImagePage;
