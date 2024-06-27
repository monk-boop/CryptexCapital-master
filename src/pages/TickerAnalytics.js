// src/pages/TickerAnalytics.js
import React from "react";
import { useParams } from "react-router-dom";

const TickerAnalytics = () => {
  const { ticker } = useParams(); // Get the ticker from URL params

  return (
    <div>
      <h2>Analytics for {ticker}</h2>
      <p>Analytics content goes here...</p>
    </div>
  );
};

export default TickerAnalytics;
