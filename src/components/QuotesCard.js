import React from "react";
import { Card, CardBody } from "reactstrap";
import Tagline from "./Brand";

function QuotesCard() {
  return (
    <Card
      className="bg-overlay-dark text-tertiary all-center "
      style={{ borderRadius: "20px", height: "500px", width: "500px" }}
    >
      <Tagline />
      <CardBody className="all-center">
        <h5>To sell or not to sell</h5>
      </CardBody>
    </Card>
  );
}

export default QuotesCard;
