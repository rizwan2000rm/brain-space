import Nav from "./Nav";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex justify-between h-screen">
      <div className="w-2/3 border">
        <Nav />
        <main>{children}</main>
        <Footer />
      </div>
      <Sidebar />
    </div>
  );
};

export default Layout;
