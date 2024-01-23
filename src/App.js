import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DataTable from './DataTable'
import SectorDetails from './SectorDetails'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <Routes> 
                <Route path="/" exact element={<DataTable />} />
                <Route path="/api/sector/:sector" element={<SectorDetails/>} />
            </Routes>
        </Router>
    );

    // return (
    //     <div>
    //         <h1>Your Data App</h1>
    //         <DataTable />
    //     </div>
    // );
}

export default App;