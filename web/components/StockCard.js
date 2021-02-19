import { useState, useEffect } from "react";

const StockCard = ({ company, logo, name }) => {
  const [stockData, setStockData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${company}&apikey=***REMOVED***`
      );
      const data = await res.json();
      setStockData(data);
    };

    fetchData();
  }, []);

  console.log(stockData);

  return (
    <div className="m-5   relative flex flex-col w-56 h-52 shadow-2xl rounded-3xl p-6">
      <div className="flex justify-between">
        <h1 className="text-gray-600 text-2xl font-bold tracking-tight mb-4">
          {name}
        </h1>
        <img className="h-8" src={`/icons8-${logo}.svg`} alt="" />
      </div>
      <span className="text-green-400 text-2xl font-bold">$780.90</span>
      <span className="text-red-400 text-lg font-bold mt-0">$787.38</span>
      <span className="text-gray-500 text-sm font-bold self-end mt-2">
        17957058
      </span>
      <span className="text-gray-500 text-sm self-end">2021-02-18</span>
    </div>
  );
};

export default StockCard;
