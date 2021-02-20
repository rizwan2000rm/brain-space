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
        <h1 className="font-display text-gray-600 text-5xl font-bold">
          Alan Turing
        </h1>
        <p className="text-gray-500 mt-6">
          Sometimes it is the people no one can imagine anything of who do the
          things no one can imagine
        </p>
        <img
          src="https://zpopk.pl/wp-content/uploads/2015/01/The-Imitation-Game-Movie-New-Pic-2.jpg"
          alt=""
          className="h-1/2 mt-6 rounded-lg"
        />
      </div>
    </div>
  );
};

export default Sidebar;
