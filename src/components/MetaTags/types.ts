export type MetaTags = {
  title: string;
  description: string;
  url: string;
  image: string;
  themeColor: string;
  keywords: string;
  author: string;
  charSet: string;
  language: string;
  icons: {
    key?: string;
    src: string;
    sizes?: string;
    type?: string;
    rel: "icon" | "apple-touch-icon";
  }[];
};
