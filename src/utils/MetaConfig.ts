import type { MetaTags } from "@/components/MetaTags/types";

// FIXME: Update this configuration file based on your project information
export const MetaConfig: MetaTags = {
  title: "NextJS Boilerplate",
  description: "Starter for NextJS projects",
  url: ".",
  image: ".",
  themeColor: "#ffffff",
  keywords: "nextjs, typescript, scss",
  author: "Maksym Kryzhanovskyi",
  charSet: "utf-8",
  language: "English",
  icons: [
    {
      key: "apple",
      src: "/apple-touch-icon.png",
      rel: "apple-touch-icon",
    },
    {
      src: "/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png",
      rel: "icon",
    },
    {
      src: "/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
      rel: "icon",
    },
  ],
};

export default MetaConfig;
