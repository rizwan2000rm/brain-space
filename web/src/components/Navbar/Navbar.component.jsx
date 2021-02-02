import "./Navbar.styles.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="nav">
        <li className="nav-brand">
          <img
            src="https://cabbage-dashboard.herokuapp.com/_nuxt/icons/icon_512.ee4a13.png"
            alt=""
            height="50"
            width="50"
          />
        </li>
        <li className="nav-item">
          <img
            src="https://cabbage-dashboard.herokuapp.com/_nuxt/icons/icon_512.ee4a13.png"
            alt=""
            height="35"
            width="35"
          />
        </li>
        <li className="nav-item">
          <img
            src="https://cabbage-dashboard.herokuapp.com/_nuxt/icons/icon_512.ee4a13.png"
            alt=""
            height="35"
            width="35"
          />
        </li>
        <li className="nav-item">
          <img
            src="https://cabbage-dashboard.herokuapp.com/_nuxt/icons/icon_512.ee4a13.png"
            alt=""
            height="35"
            width="35"
          />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
