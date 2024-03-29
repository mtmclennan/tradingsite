export interface Post {
  _id: string;
  title: string;
  featuredImage: string;
  photoCaption: string;
  tags: string;
  slug: string;
  author: string;
  dateModified: string;
  datePublished: string;
  description: string;
  postBody: string;
  published: string;
}

export interface Res {
  status: string;
}

export interface Html {
  __html: string;
}
