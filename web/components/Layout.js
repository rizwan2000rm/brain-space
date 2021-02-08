import Nav from "./Nav";
import Divider from "./Divider";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Divider />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
