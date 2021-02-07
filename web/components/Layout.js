import Nav from "./Nav";
import Divider from "./Divider";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Divider />
      <main>{children}</main>
    </>
  );
};

export default Layout;
