const Hero = () => {
  return (
    <div className="flex w-2/3 mx-4 my-6">
      <img
        className="w-1/2  rounded-lg"
        src="/illustration.png"
        alt="illustration"
      />
      <div className="w-1/2 ml-4 px-4">
        <h1 className="text-5xl font-display text-gray-600 mb-6">Brainspace</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas neque
          velit blanditiis? At recusandae deleniti vitae quas quaerat
          consectetur quis, expedita, ipsum officia accusamus voluptatem!
        </p>
        <button className="active px-2.5 py-1 mt-6">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
