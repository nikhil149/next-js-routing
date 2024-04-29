import { getAvailableNewsYears } from "@/libs/news";
import Link from "next/link";

const ArchivePage = () => {
  const years = getAvailableNewsYears();
  return (
    <header id="archive-header">
      <nav>
        <ul>
          {years.map((yearLink) => (
            <li>
              <Link href={`/archive/${yearLink}`}>{yearLink}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default ArchivePage;
