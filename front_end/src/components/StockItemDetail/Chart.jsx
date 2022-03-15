import { useState } from "react";
import LineChart from "../LineChart";
import {
  dayData,
  weekData,
  monthData,
  yearData,
} from "../../assets/marketChartTestData";
import "../PageContainer.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Chart() {
  const [data, setData] = useState(dayData);
  const [period, setPeriod] = useState("1D");
  let seriesesData = new Map([
    ["1D", dayData],
    ["1W", weekData],
    ["1M", monthData],
    ["1Y", yearData],
  ]);

  const btnList = () => {
    const list = [];
    const intervals = ["1D", "1W", "1M", "1Y"];
    intervals.forEach((el, idx) => {
      list.push(
        <button
          key={idx}
          onClick={(e) => {
            e.preventDefault();
            setData(seriesesData.get(e.target.innerText));
            setPeriod(e.target.innerText);
          }}
          className={classNames(
            "switcher-item",
            period === el ? "switcher-active-item" : ""
          )}
        >
          {el}
        </button>
      );
    });
    return list;
  };

  return (
    <div className="pt-1 grid grid-cols-1">
      <div className="grid border-2 my-h-50 grid-rows-6 rounded-xl m-2 p-3">
        <div className="grid row-span-5">
          <LineChart data={data} />
        </div>
        <div className="switcher row-span-1 pt-8">{btnList()}</div>
      </div>
    </div>
  );
}