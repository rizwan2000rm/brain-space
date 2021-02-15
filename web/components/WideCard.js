const WideCard = () => {
  return (
    <div className="w-72 mr-10 mb-5">
      <img
        className="rounded"
        src="https://pocket-image-cache.com//filters:no_upscale():format(jpg):extract_cover()/https%3A%2F%2Fpocket-image-cache.com%2F%2Ffilters%3Ano_upscale()%3Aformat(jpg)%3Aextract_cover()%2Fhttps%253A%252F%252Fmedia.newyorker.com%252Fphotos%252F6021b4f337eb09d6fe588503%252F16%253A9%252Fw_1280%252Cc_limit%252FKlonick-FacebookSupreme.jpg"
        alt=""
      />
      <h1 className="text-base mt-2 mx-1 leading-5">
        Inside the Making of Facebook’s Supreme Court
      </h1>
      <p className="text-sm mt-2 mx-1 flex justify-between text-gray-600">
        The New Yorker <span>31 min</span>
      </p>
    </div>
  );
};

export default WideCard;
