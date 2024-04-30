import NewsList from "@/components/news-list";
import { getAvailableNewsYears, getNewsForYear } from "@/libs/news";
import Link from "next/link";

const NewsFilteredPage = ({ params }) => {
  const year = params.filter;

  const selectedYear = year?.[0];
  const selectedMonth = year?.[1];

  let news;

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(year);
  }

  let newsContent = <p>No news found for the selected period</p>;
  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }
  const years = getAvailableNewsYears();
  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {years.map((yearLink) => (
              <li key={yearLink}>
                <Link href={`/archive/${yearLink}`}>{yearLink}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
};

export default NewsFilteredPage;
