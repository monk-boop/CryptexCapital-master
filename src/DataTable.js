import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Table from './components/Table';
import { Container, Row, Col } from 'react-bootstrap';

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

    const columns = [
      { headerName: "Sector", field: "Sector" },
      { headerName: "Combined Earnings Growth", field: "Weighted_Average" }
      // ... more columns as needed
    ];

    return (
      <Container fluid>
        <Row>
          <Col md={6}>
              <h2>Earnings Growth Table</h2>
              <Table columns={columns} data={data} onRowClick={handleSectorClick} />
          </Col>
          <Col md={6}>
              <h2>Earnings Growth Table</h2>
              <Table columns={columns} data={data} onRowClick={handleSectorClick} />
          </Col>
        </Row>
      </Container>
   
      );
};

export default DataTable;