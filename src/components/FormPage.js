import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import QuotesCard from "./QuotesCard";
import RegisterForm from "./RegisterForm";
import bg from "../assets/bg-blue.png";
import LoginForm from "./LoginForm";
import BackgroundImage from "./BackgroundImage";

function FormPage() {
  const [formSwitch, toggleFormSwitch] = useState(false);
  return (
    <div className="all-center bg-dark">
      <BackgroundImage bg={bg} />
      <Row style={{ position: "absolute" }} className="full all-center w-100">
        <Col className="col-6 all-center">
          <QuotesCard />
        </Col>
        <Col className="col-5 all-center">
          {formSwitch ? (
            <LoginForm
              toggleFormSwitch={toggleFormSwitch}
              formSwitch={formSwitch}
            />
          ) : (
            <RegisterForm
              toggleFormSwitch={toggleFormSwitch}
              formSwitch={formSwitch}
            />
          )}
        </Col>
      </Row>
    </div>
  );
}

export default FormPage;
