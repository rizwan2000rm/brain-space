const Hero = () => {
  return (
    <div className="flex justify-between mx-4 my-6">
      <img
        className="w-1/2 rounded-lg"
        src="/illustration2.jpg"
        alt="illustration"
      />
      <div className="w-1/2 ml-4 px-8">
        <h1 className="text-5xl font-display text-gray-600 mb-6 flex">
          Steve Jobs{" "}
          <img
            src="https://i.pinimg.com/originals/3e/80/c6/3e80c665b081a918175be5f5bcd10a9d.jpg"
            alt=""
            className="ml-3 h-16"
          />
        </h1>
        <p className="text-gray-500">
          Sometimes life's going to hit you in the head with a brick. Don't lose
          faith. I'm convinced that the only thing that kept me going was that I
          loved what I did.
        </p>
        <button className="active px-2.5 py-1 mt-6">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
