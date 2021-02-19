import Nav from "./Nav";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex justify-between h-screen">
      <div className="w-3/5 border">
        <Nav />
        <main>{children}</main>
      </div>
      <Sidebar />
    </div>
  );
};

export default Layout;
