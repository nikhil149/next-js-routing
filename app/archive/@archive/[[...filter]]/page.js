import NewsList from "@/components/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/libs/news";
import Link from "next/link";

const NewsFilteredPage = ({ params }) => {
  const year = params.filter;

  const selectedYear = year?.[0];
  const selectedMonth = year?.[1];

  let news;
  let links = getAvailableNewsYears();
  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  } else if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  let newsContent = <p>No news found for the selected period</p>;
  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  if (
    (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))
  ) {
    throw new Error("Invalid Filters");
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((yearLink) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${yearLink}/`
                : `/archive/${yearLink}/`;
              return (
                <li key={yearLink}>
                  <Link href={href}>{yearLink}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
};

export default NewsFilteredPage;
