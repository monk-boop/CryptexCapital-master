import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DataTable = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/api/earnings_momentum')
        .then(response => {
        console.log('API Response:', response.data);
        setData(response.data)
    })
        .catch(error => console.error('error fetching Data: ', error));
    },[]);

    const handleSectorClick = async (sectorName) => {
        try {
            // Send the sector name to the backend
            const response = await axios.get(`http://127.0.0.1:5000/api/sector/${encodeURIComponent(sectorName)}`);
            console.log(response)
            // After getting the response, navigate to the SectorDetails page
            navigate(`/api/sector/${sectorName}`, { state: { detail: response.data } });
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
          <h2>Data Table</h2>
          <table>
            <thead>
              <tr>
                <th>Column1</th>
                <th>Column2</th>
                {/* Add more headers based on your DataFrame columns */}
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td onClick={() => handleSectorClick(row.Sector)} style={{ cursor: 'pointer' }}>{row.Sector}</td>
                  <td>{row.Weighted_Average}</td>
                  {/* Add more cells based on your DataFrame columns */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
};

export default DataTable;