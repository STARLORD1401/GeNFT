import React from "react";
import { Card, CardBody } from "reactstrap";
import Tagline from "./Brand";

function QuotesCard() {
  return (
    <Card
      className="text-tertiary all-center bg-dark p-5 "
      style={{
        borderRadius: "20px",
        height: "500px",
        width: "500px",
      }}
    >
      <Tagline />
      <CardBody className="all-center">
        <h5>
          To sell or not to sell that is the question.
          <br />
          <br /> Well, you can always HODL
        </h5>
      </CardBody>
    </Card>
  );
}

export default QuotesCard;
