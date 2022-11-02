import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import QuotesCard from "./QuotesCard";
import RegisterForm from "./RegisterForm";
import bg from "../assets/bg-3.png";
import LoginForm from "./LoginForm";
import BackgroundImage from "./BackgroundImage";

function FormPage() {
  //State variable for toggling form state.
  const [formSwitch, toggleFormSwitch] = useState(false);
  return (
    <div className="all-center bg-dark">
      <BackgroundImage bg={bg} />
      <Row style={{ position: "absolute" }} className="full all-center w-100">
        <Col className="col-6 all-center">
          {/* Invoking a card with a Random Quote in it. */}
          <QuotesCard />
        </Col>
        <Col className="col-5 all-center">
          {formSwitch ? (
            // Toggle Registration Form Card
            <RegisterForm
              toggleFormSwitch={toggleFormSwitch}
              formSwitch={formSwitch}
            />
          ) : (
            // Toggle Login Form Card
            <LoginForm
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
