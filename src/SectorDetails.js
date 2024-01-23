import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Table from './components/Table';

const SectorDetails = () => {
    const [details, setDetails] = useState(null);
    const { sector } = useParams();

    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/api/sector/${sector}`)
            .then(response => {
            console.log('API ResponsesectorDetails:', response.data)
            setDetails(response.data);
            })
            
            .catch(error => console.error('Error fetching sector details:', error));
    }, [sector]);

    if (!details) return <div>Loading sector details...</div>;

    const columns = [
      { headerName: "Ticker", field: "ticker" },
      { headerName: "Earnings Growth", field: "earnings_min" }
    ]
    
    return (
      <div>
        <h2>Data Table</h2>
        <Table columns={columns} data={details}/>
      </div>
    );
};

export default SectorDetails;
