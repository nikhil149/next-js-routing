import Link from "next/link";

const News = () => {
  return (
    <>
      <h1>News Page</h1>
      <ul className="news-list">
        <li>
          <Link href="/news/first-news">First News</Link>
        </li>
        <li>
          <Link href="/news/second-news">Second News</Link>
        </li>
        <li>
          <Link href="/news/third-news">Third News</Link>
        </li>
      </ul>
    </>
  );
};

export default News;
