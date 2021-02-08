import Head from "next/head";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex w-2/3 mx-4 my-6">
          <img
            className="w-1/2  rounded-lg"
            src="/illustration.png"
            alt="illustration"
          />
          <div className="w-1/2 ml-4 px-4">
            <h1 className="text-5xl font-display text-gray-600 mb-6">
              Brainspace
            </h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              neque velit blanditiis? At recusandae deleniti vitae quas quaerat
              consectetur quis, expedita, ipsum officia accusamus voluptatem!
            </p>
            <button className="active px-2.5 py-1 mt-6">Get Started</button>
          </div>
        </div>
        <div className="flex justify-evenly mx-4 my-12 w-2/3">
          <div className="flex flex-col w-150 h-150 shadow-2xl rounded-lg px-12 py-10 text-center">
            <img
              src="/icons8-reading-96.png"
              alt="Library"
              width="96"
              height="96"
            />
            <h1 className="text-lg mt-2">Library</h1>
            <Link className="text-xs" href="/library">
              <p className="text-sm mt-1 text-green-600">Discover</p>
            </Link>
          </div>
          <div className="flex flex-col w-150 h-150 shadow-2xl rounded-lg px-12 py-10 text-center">
            <img
              src="/icons8-goodnotes-96.png"
              alt="Library"
              width="96"
              height="96"
            />
            <h1 className="text-lg mt-2">Wall</h1>
            <Link className="text-xs" href="/wall">
              <p className="text-sm mt-1 text-green-600">Discover</p>
            </Link>
          </div>
          <div className="flex flex-col w-150 h-150 shadow-2xl rounded-lg px-12 py-10 text-center">
            <img
              src="/icons8-stocks-96.png"
              alt="Library"
              width="96"
              height="96"
            />
            <h1 className="text-lg mt-2">Stocks</h1>
            <Link href="/stocks">
              <p className="text-sm mt-1 text-green-600">Discover</p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
