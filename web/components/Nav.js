import Link from "next/link";

const Nav = () => {
  return (
    <>
      <h1 className="font-display font-extrabold text-3xl text-gray-500 m-4 tracking-tight">
        Brainspace
      </h1>
      <nav>
        <ul className="flex flex-row text-sm font-medium text-white">
          <Link href="/">
            <li className="bg-green-400 px-2.5 py-1 m-4 rounded-lg hover:bg-green-700 cursor-pointer">
              Home
            </li>
          </Link>
          <Link href="/library">
            <li className="px-2.5 py-1 m-4 rounded-lg text-gray-500 hover:bg-green-400 hover:text-white cursor-pointer">
              Library
            </li>
          </Link>
          <Link href="/wall">
            <li className="px-2.5 py-1 m-4 rounded-lg text-gray-500 hover:bg-green-400 hover:text-white cursor-pointer">
              Wall
            </li>
          </Link>
          <Link href="/stocks">
            <li className="px-2.5 py-1 m-4 rounded-lg text-gray-500 hover:bg-green-400 hover:text-white cursor-pointer">
              Stocks
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
