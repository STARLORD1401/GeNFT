import React from "react";
import { Col, Row } from "reactstrap";
import QuotesCard from "./QuotesCard";
import RegisterForm from "./RegisterForm";

function FormPage() {
  return (
    <Row className="w-100 all-center p-3 bg-dark full">
      <Col className="col-6 all-center">
        <QuotesCard />
      </Col>
      <Col className="col-6 all-center">
        <RegisterForm />
      </Col>
    </Row>
  );
}

export default FormPage;
