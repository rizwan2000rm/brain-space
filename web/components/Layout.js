import Nav from "./Nav";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex justify-between h-screen">
      <div className="w-3/5 border">
        <Nav />
        <main className="pr-16">{children}</main>
        <Footer />
      </div>
      <Sidebar />
    </div>
  );
};

export default Layout;
