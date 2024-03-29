import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  if (!req.body) {
    return res.status(422).json({ message: "Invalid request body" });
  }
  // console.log(req.body);
  const slug = req.body.slug;
  // console.log(slug);

  try {
    // await res.revalidate(`/blog`);
    await res.revalidate(`/blog/${slug}`);
    console.log("Build hook");

    return res.status(200).json({ revalidated: true });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Error revalidating");
  }
}
