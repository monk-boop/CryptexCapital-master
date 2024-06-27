import React, { useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TableComponent from "../../components/Table";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchSectorDetails } from "../../store/sectorSlice";

const SectorDetails = () => {
  const { sectorName } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const details = useSelector((state) => state.sectorEarnings.data);

  useEffect(() => {
    if (!details) {
      dispatch(fetchSectorDetails(sectorName, "momentum_no_neg"));
    }
  }, [dispatch, sectorName, details]);

  console.log("Details in SectorDetails component: ", details);

  // Ensure details.data is an array before passing it to TableComponent
  const transformedData = useMemo(() => {
    if (!details || !Array.isArray(details)) return [];

    return details
      .map((item) => ({
        Ticker: item.ticker,
        momentum_no_neg: item.momentum_no_neg,
      }))
      .sort((a, b) => b.momentum_no_neg - a.momentum_no_neg);
  }, [details]);

  if (details.length === 0) return <div>Loading sector details...</div>;

  const handleTickerClick = (row) => {
    console.log("Row clicked:", row);
    if (row && row.Ticker) {
      navigate(`/ticker/${row.Ticker}`);
    } else {
      console.error("Row or Ticker is undefined:", row);
    }
  };

  const columns = [
    { headerName: "Ticker", field: "Ticker" },
    { headerName: "Earnings Growth", field: "momentum_no_neg" },
  ];
  console.log("transformedData is ", transformedData);
  return (
    <Container fluid>
      <Row>
        <Col md={6}>
          <h2>Earnings Growth (No Negatives)</h2>
          <TableComponent
            columns={columns}
            data={transformedData}
            onRowClick={handleTickerClick}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SectorDetails;
