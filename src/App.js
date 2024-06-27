import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DataTable from "./pages/inrmomentum/DataTable";
import SectorDetails from "./pages/inrmomentum/sectorDetails";
import SelectionPage from "./pages/SelectionPage";
import TickerAnalytics from "./pages/TickerAnalytics";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<SelectionPage />} />
          <Route path="/data/:region" element={<DataTable />} />
          <Route
            path="/api/sector/:sectorName/:field"
            element={<SectorDetails />}
          />
          <Route path="/ticker/:ticker" element={<TickerAnalytics />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
