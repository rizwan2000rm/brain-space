const Sidebar = () => {
  return (
    <div className="w-2/5 m-4 flex flex-col p-8">
      <div className="flex justify-between">
        <h1 className="font-display text-lg text-gray-500">toastyhead</h1>
        <img
          width="45"
          height="45"
          src="https://www.redwolf.in/image/catalog/designer-Images/themes/minions-merchandise-india.jpg"
          alt="profile"
        />
      </div>
      <div className="mt-16">
        <h1 className="text-gray-600 text-3xl font-bold">
          Lorem ipsum dolor sit.
        </h1>
        <p className="text-gray-500 mt-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga nostrum
          nulla, voluptatem odit expedita molestias?
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
