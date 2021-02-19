import StockCard from "../components/StockCard";

const stocks = () => {
  return (
    <div className="m-5 flex flex-wrap">
      <StockCard />
      <StockCard />
      <StockCard />
      <StockCard />
    </div>
  );
};

export default stocks;
