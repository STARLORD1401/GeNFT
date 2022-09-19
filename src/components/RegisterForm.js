import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Form,
  FormGroup,
  Input,
  Button,
  Label,
} from "reactstrap";
function RegisterForm() {
  return (
    <Card
      className="text-secondary p-0 bg-overlay-dark"
      style={{ borderRadius: "20px" }}
    >
      <CardHeader
        className=""
        style={{
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        }}
      >
        Register
      </CardHeader>
      <CardBody>
        <Form>
          <div className="d-flex">
            <FormGroup className="p-2">
              <Label>First Name</Label>
              <Input
                className="bg-dark border-secondary text-secondary form-control rounded-pill"
                placeholder="First Name"
              />
            </FormGroup>
            <FormGroup className="p-2">
              <Label>Last Name</Label>
              <Input
                className="bg-dark border-secondary text-secondary form-control rounded-pill"
                placeholder="Last Name"
              />
            </FormGroup>
          </div>
          <FormGroup className="p-2">
            <Label>Email</Label>
            <Input
              className="bg-dark border-secondary text-secondary form-control rounded-pill"
              placeholder="Email"
            />
          </FormGroup>
          <div className="d-flex">
            <FormGroup className="p-2 col-2">
              <Label>+</Label>
              <Input className="bg-dark border-secondary text-secondary form-control rounded-pill" />
            </FormGroup>
            <FormGroup className="p-2 col-10">
              <Label>Phone Number</Label>
              <Input
                className="bg-dark border-secondary text-secondary form-control rounded-pill"
                placeholder="Phone"
              />
            </FormGroup>
          </div>
          <FormGroup className="p-2">
            <Label>Password</Label>
            <Input
              className="bg-dark border-secondary text-secondary form-control rounded-pill"
              placeholder="Enter a password"
              type="password"
            />
          </FormGroup>
          <FormGroup className="p-2">
            <Label>Confirm Password</Label>
            <Input
              className="bg-dark border-secondary text-secondary form-control rounded-pill"
              placeholder="Confirm Password"
              type="password"
            />
          </FormGroup>
        </Form>
      </CardBody>
      <CardFooter className="all-center">
        <Button type="submit" className="rounded-pill w-25">
          Register
        </Button>
      </CardFooter>
    </Card>
  );
}

export default RegisterForm;
