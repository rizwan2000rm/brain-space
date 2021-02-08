import Head from "next/head";

import Hero from "../components/Hero";
import Card from "../components/Card";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero />
        <div className="flex justify-evenly mx-4 my-12 w-2/3">
          <Card title="Library" link="library" img="icons8-reading-96.png" />
          <Card title="Wall" link="wall" img="icons8-goodnotes-96.png" />
          <Card title="Stocks" link="stocks" img="icons8-stocks-96.png" />
        </div>
      </div>
    </div>
  );
};

export default Home;
