import { createChart } from "lightweight-charts";
import React, { useEffect, useRef } from "react";

export const ProfitLineChart = ({ marketData, testData }) => {
  const chartContainerRef = useRef();

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      layout: {
        fontFamily: "Comic Sans MS",
        textColor: "#d1d4dc",
      },
      grid: {
        vertLines: {
          color: "rgba(42, 46, 57, 0)",
        },
        horzLines: {
          color: "rgba(42, 46, 57, 0.1)",
        },
      },
      rightPriceScale: {
        borderVisible: false,
      },
      timeScale: {
        borderVisible: false,
      },
      crosshair: {
        horzLine: {
          visible: false,
        },
      },
    });
    chart.timeScale().fitContent();

    const marketSeries = chart.addLineSeries({
      color: "rgba(255, 130, 92, 0.8)",
      lineWidth: 3,
    });
    const testSeries = chart.addLineSeries({
      color: "rgba(24, 33, 109, 0.8)",
      lineWidth: 3,
    });

    marketSeries.setData(marketData);
    testSeries.setData(testData);

    var minimumPrice = marketData[0].value;
    var maximumPrice = minimumPrice;
    for (var i = 1; i < marketData.length; i++) {
      var price = marketData[i].value;
      if (price > maximumPrice) {
        maximumPrice = price;
      }
      if (price < minimumPrice) {
        minimumPrice = price;
      }
    }

    const minPriceLine = {
      price: minimumPrice,
      color: "#FAEBE5",
      lineWidth: 1,
      axisLabelVisible: true,
      title: "최저",
    };
    const maxPriceLine = {
      price: maximumPrice,
      color: "#FAEBE5",
      lineWidth: 1,
      axisLabelVisible: true,
      title: "최고",
    };

    testSeries.createPriceLine(minPriceLine);
    testSeries.createPriceLine(maxPriceLine);

    const handleResize = () => {
      console.log("@ resized here");
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);

      chart.remove();
    };
  }, [marketData, testData]);

  return (
    <div className="parent-container">
      <div className="child-container" ref={chartContainerRef} />
    </div>
  );
};
