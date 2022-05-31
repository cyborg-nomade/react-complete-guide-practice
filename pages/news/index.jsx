// our-domain.com/news
import { Fragment } from "react";
import Link from "next/link";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/link-1">NextJS is a great framework</Link>
        </li>
        <li>
          <Link href="/news/link-2">Other</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
