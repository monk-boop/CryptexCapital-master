// store/DataTable.js
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import TableComponent from "../../components/Table";
import { fetchEarningsMomentum } from "../../store/earningsSlice";
import { fetchSectorDetails } from "../../store/sectorSlice";

const DataTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { region } = useParams();
  const data = useSelector((state) => state.earnings.data);
  const earningsStatus = useSelector((state) => state.earnings.status);
  const error = useSelector((state) => state.earnings.error);

  useEffect(() => {
    if (earningsStatus === "idle") {
      dispatch(fetchEarningsMomentum(region));
    }
  }, [earningsStatus, dispatch, region]);

  const handleSectorClick = (sector, table_name, fullRow) => {
    console.log("handleSectorClick values are", sector, table_name, fullRow);
    dispatch(fetchSectorDetails(sector, table_name, navigate));
  };
  const columns = [
    { headerName: "Sector", field: "Sector" },
    { headerName: "Combined Earnings Growth", field: "momentum_no_neg" },
    // ... more columns as needed
  ];

  const transformedData = useMemo(() => {
    if (!data || !Array.isArray(data)) return [];

    return data
      .map((item) => ({
        Sector: item.Sector,
        momentum_no_neg: item.momentum_no_neg,
      }))
      .sort((a, b) => b.momentum_no_neg - a.momentum_no_neg);
  }, [data]);

  if (earningsStatus === "loading") {
    return <div>Loading...</div>;
  } else if (earningsStatus === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <Container fluid>
      <Row>
        <Col md={6}>
          <h2>Earnings Growth Table</h2>
          <TableComponent
            columns={columns}
            data={transformedData}
            onRowClick={(row) => handleSectorClick(row, "momentum_no_neg")}
          />
        </Col>
        {/* <Col md={6}>
          <h2>Earnings Growth Table</h2>
          <TableComponent
            columns={columns}
            data={data}
            onRowClick={handleSectorClick}
          />
        </Col> */}
      </Row>
    </Container>
  );
};

export default DataTable;
