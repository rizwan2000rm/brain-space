const Sidebar = () => {
  return (
    <div className="fixed top-0 right-0 w-1/4 h-screen m-4">
      <div className="flex justify-between">
        <h1 className="font-display text-lg text-gray-500">toastyhead</h1>
        <img
          width="45"
          height="45"
          src="https://www.redwolf.in/image/catalog/designer-Images/themes/minions-merchandise-india.jpg"
          alt="profile"
        />
      </div>
      <div className="fixed w-30 flex flex-col top-1/3 left-3/4">
        <h1 className="text-gray-500 text-xl">
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <p className="text-gray-400 text-sm mt-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga nostrum
          nulla, voluptatem odit expedita molestias?
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
