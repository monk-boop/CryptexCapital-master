import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Table from './components/Table';
import { Container, Row, Col } from 'react-bootstrap';


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
      <Container fluid>
        <Row>
          <Col md={6}>
              <h2>Earnings Growth Table</h2>
              <Table columns={columns} data={details}/>
         </Col>
        </Row>
      </Container>
    );
};

export default SectorDetails;
