import React from "react";
import { Card, CardBody, CardHeader, Row } from "reactstrap";

function Overview() {
  const n = 5;
  const k = 3;

  return (
    <div className=" all-center flex-column">
      <Card
        className="bg-dark w-100 text-tertiary mt-3"
        style={{ borderRadius: "20px" }}
      >
        <CardBody>
          <h6>Embrace your inner collector, generate your NFT's now!</h6>
        </CardBody>
      </Card>
      <Card
        color="dark"
        className="mt-3 rounded-3 p-2"
        style={{ boxShadow: "none", borderRadius: "20px" }}
      >
        <CardHeader className="text-tertiary text-center">GeNFT</CardHeader>
        <CardBody className=" flex-column all-center overview-container">
          {[...Array(n)].map((e, i) => (
            <Row className="p-2">
              {[...Array(k)].map((e, m) => (
                <div
                  className={`overview-nft-box rounded-2 mx-2  text-white all-center  ${
                    (m + 1 + i) % 2 === 0 ? "bg-primary" : "bg-secondary"
                  } `}
                >
                  NFT
                </div>
              ))}
            </Row>
          ))}
        </CardBody>
      </Card>
    </div>
  );
}

export default Overview;
