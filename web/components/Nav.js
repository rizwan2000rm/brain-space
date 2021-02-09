import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  return (
    <div className="mx-4">
      <h1 className="font-display font-extrabold text-3xl text-gray-600 my-4 tracking-tight">
        Brainspace
      </h1>
      <nav>
        <ul className="flex flex-row text-sm font-medium text-white">
          <Link href="/">
            <li
              className={`link px-2.5 py-1 mr-4 my-4 ${
                router.pathname === "/" ? "active" : ""
              }`}
            >
              Home
            </li>
          </Link>
          <Link href="/library">
            <li
              className={`link px-2.5 py-1 m-4 ${
                router.pathname === "/library" ? "active" : ""
              }`}
            >
              Library
            </li>
          </Link>
          <Link href="/wall">
            <li
              className={`link px-2.5 py-1 m-4 ${
                router.pathname === "/wall" ? "active" : ""
              }`}
            >
              Wall
            </li>
          </Link>
          <Link href="/stocks">
            <li
              className={`link px-2.5 py-1 m-4 ${
                router.pathname === "/stocks" ? "active" : ""
              }`}
            >
              Stocks
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
