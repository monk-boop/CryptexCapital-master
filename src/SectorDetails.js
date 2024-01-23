import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
    
    return (
        <div>
          <h2>Sector Details: {sector}</h2>
          <table>
            <thead>
              <tr>
                <th>Column1</th>
                <th>Column2</th>
                {/* Add more headers based on your DataFrame columns */}
              </tr>
            </thead>
            <tbody>
            {details && Array.isArray(details) && (
                details.map((detail, index) => (
                    <tr key={index}>
                        {/* Render each detail - adjust based on your actual data structure */}
                       <td>{detail.ticker}</td> 
                        <td>{detail.earnings_min}</td>
                    </tr>
                ))
            )}
            </tbody>
          </table>
        </div>


        // <div>
        //     <h2>Sector Details: {sector}</h2>
        //     {details && Array.isArray(details) && (
        
        //     <ul>
        //         {details.map((detail, index) => (
        //             <li key={index}>
        //                 {/* Render each detail - adjust based on your actual data structure */}
        //                 Ticker: {detail.ticker}
        //                 MoM: {detail.earnings_min}
        //             </li>
        //         ))}
        //     </ul>
        // )}
        // </div>
    );
};

export default SectorDetails;
