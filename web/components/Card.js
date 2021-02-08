import Link from "next/link";

const Card = ({ title, link, img }) => {
  return (
    <div>
      <div className="flex flex-col w-150 h-150 shadow-2xl rounded-lg px-12 py-7 text-center">
        <img src={img} alt={title} width="96" height="96" />
        <h1 className="text-lg mt-2">{title}</h1>
        <Link className="text-xs" href={`/${link}`}>
          <p className="text-sm cursor-pointer mt-1 text-green-600">Discover</p>
        </Link>
      </div>
    </div>
  );
};

export default Card;
