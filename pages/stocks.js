import StockCard from "../components/StockCard";

const stocks = () => {
  return (
    <div className="m-5 flex flex-wrap">
      <StockCard company={"AAPL"} logo={"apple-logo"} name={"Apple Inc."} />
      <StockCard company={"TSLA"} logo={"tesla"} name={"Tesla"} />
      <StockCard company={"GOOG"} logo={"google"} name={"Alphabet"} />
      <StockCard company={"AMZN"} logo={"amazon"} name={"Amazon"} />
      <StockCard company={"MSFT"} logo={"microsoft"} name={"Microsoft "} />
    </div>
  );
};

export default stocks;
