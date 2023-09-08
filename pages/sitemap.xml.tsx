import { GetServerSideProps } from "next";
import { getAllPosts } from "../lib/post-utils";
import { Post } from "../types/interfaces";

export default function SiteMap() {
  return null;
}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  context.res.setHeader("Content-Type", "text/xml");
  const xml = await generateSiteMap();
  context.res.write(xml);
  context.res.end();

  return {
    props: {},
  };
};

const generateSiteMap = async () => {
  const pages = await getAllPosts();
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
<loc>https://edgeinmind.com</loc>
<lastmod>2023-07-31</lastmod>
</url>
<url>
<loc>https://edgeinmind.com/tools</loc>
<lastmod>2023-07-31</lastmod>
</url>
<url>
<loc>https://edgeinmind.com/tools/trade-order-calculator</loc>
<lastmod>2023-07-31</lastmod>
</url>
<url>
<loc>https://edgeinmind.com/tools/trade-order-calculator-atr</loc>
<lastmod>2023-07-31</lastmod>
</url>
<url>
<loc>https://edgeinmind.com/tools/risk-on-trade-calculator</loc>
<lastmod>2023-07-31</lastmod>
</url>
<url>
<loc>https://edgeinmind.com/tools/equity-curve-simulator</loc>
<lastmod>2023-07-31</lastmod>
</url>
<url>
<loc>https://edgeinmind.com/blog</loc>
<lastmod>2023-07-31</lastmod>
</url>
    ${pages.data
      .map((page: Post) => {
        return `
    <url>
    <loc>https://edgeinmind.com/blog/${page.slug}</loc>
    <lastmod>${page.dateModified.split("T")[0]}</lastmod>
    </url>
        `;
      })
      .join("")}
    </urlset>`;
};
