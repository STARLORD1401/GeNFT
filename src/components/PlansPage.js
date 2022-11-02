import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Col,
  Row,
  CardFooter,
  Button,
} from "reactstrap";

function PlansPage() {
  return (
    <Row className="all-center">
      <p className="text-tertiary all-center display-6 ">
        Start by taking a look at our plans!
      </p>
      <Row>
        <Col className="text-primary col-6 all-center plan-card">
          {/* Plan Card 1  */}
          <Card className="bg-dark w-75" style={{ borderRadius: "20px" }}>
            <CardHeader className="text-center ">
              <h3>10 NFT's Plan</h3>
            </CardHeader>
            <CardBody className="text-white">
              <ul>
                <li className="mt-5">10 Unique NFT's</li>
                <li className="mt-5">Forever yours to own</li>
                <li className="mt-5">1 Free NFT every 3 Months*</li>
                <li className="mt-5">Get discount coupons*</li>
              </ul>
            </CardBody>
            <CardFooter className="all-center">
              <Button color="primary" className="w-25 rounded-pill">
                Buy
              </Button>
            </CardFooter>
          </Card>
        </Col>
        <Col className="text-secondary col-6 all-center plan-card">
          {/* Plan Card 2  */}
          <Card className="bg-dark w-75" style={{ borderRadius: "20px" }}>
            <CardHeader className="text-center">
              <h3>20 NFT's Plan</h3>
            </CardHeader>
            <CardBody className="text-white">
              <ul>
                <li className="mt-5">20 Unique NFT's</li>
                <li className="mt-5">Forever yours to own</li>
                <li className="mt-5">2 Free NFT's every 3 Months*</li>
                <li className="mt-5">Get discount coupons*</li>
              </ul>
            </CardBody>
            <CardFooter className="all-center">
              {/* Buy Button  */}
              <Button color="secondary" className="w-25 rounded-pill">
                Buy
              </Button>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Row>
  );
}

export default PlansPage;
