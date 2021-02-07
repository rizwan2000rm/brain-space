import borderStyles from "../styles/Divider.module.scss";

const Divider = () => {
  // return <div className="h-full border-8"></div>;
  return <div className={`${borderStyles.border} h-full`}></div>;
};

export default Divider;
