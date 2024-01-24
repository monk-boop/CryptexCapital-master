import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DataTable from './DataTable'
import SectorDetails from './SectorDetails'
import Sidebar from './components/Sidebar';
import { Container, Row, Col } from 'react-bootstrap';



function App() {
    return (
        <Router>
            <Container fluid>
                <Row>
                    <Col md={3} lg={2} className="sidebar">
                        <Sidebar /> 
                    </Col>
                    <Col md={9} lg={10} className="main-content">
                        <Routes> 
                            <Route path="/" exact element={<DataTable />} />
                            <Route path="/api/sector/:sector" element={<SectorDetails/>} />
                        </Routes>
                    </Col>
                </Row>
            </Container>
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