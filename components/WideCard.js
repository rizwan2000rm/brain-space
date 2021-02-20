const WideCard = ({ title, url, image, readTime }) => {
  return (
    <a href={url} className="w-72 mr-8 mb-5">
      <div className="hover:underline">
        <img
          className="rounded cursor-pointer hover:opacity-90 object-cover h-40 w-full"
          src={image}
          alt={title}
        />
        <h1 className="text-base mt-2 mx-1 leading-5 cursor-pointer hover:text-gray-700">
          {title}
        </h1>
      </div>
      <p className="text-sm mt-2 mx-1 flex justify-between text-gray-600">
        {url} <span>{readTime}</span>
      </p>
    </a>
  );
};

export default WideCard;
