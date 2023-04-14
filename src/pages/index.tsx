import { type NextPage } from "next";

import MetaTags from "@/components/MetaTags";
import MetaConfig from "@/utils/MetaConfig";

const Home: NextPage = () => (
  <>
    <MetaTags metaData={MetaConfig} />
    <div className="main">Hello, it&apos;s simple starter for my usage!</div>
  </>
);

export default Home;
