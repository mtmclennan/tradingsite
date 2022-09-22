import { Fragment } from "react";
import Link from "next/link";
import Layout from "../../components/layouts/Layout";
const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-great">A great Framework NextJS</Link>
        </li>
        <li>SomethingElse</li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
