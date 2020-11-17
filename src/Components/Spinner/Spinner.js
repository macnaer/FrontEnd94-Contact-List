import React from "react";
import Spinner from "react-bootstrap/Spinner";
import { Container, Row, Col } from "react-bootstrap";
import "./spinner.css";

const Loader = () => {
  return (
    <Container>
      <Row>
        <Col className="spinner">
          <Spinner
            animation="border"
            className="spinner-size"
            role="status"
            size="lg"
          >
            <span className="sr-only">Loading...</span>
          </Spinner>
        </Col>
      </Row>
    </Container>
  );
};
export default Loader;
