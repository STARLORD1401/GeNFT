import React, { useState } from "react";
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
import axios from "../axios.js";
function RegisterForm(props) {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e, value) => {
    if (confirmPassword === password) {
      const payload = {
        first_name,
        last_name,
        username,
        password,
        email,
        phone,
      };
      axios.post("/users/register", payload).then((res) => {
        console.log(res);
      });
      console.log(payload);
    } else {
      console.log("nope");
    }
  };

  return (
    <Card
      className="text-secondary p-0 bg-dark w-100"
      style={{ borderRadius: "20px" }}
    >
      <CardHeader
        className="all-center"
        style={{
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        }}
      >
        <h2>Register</h2>
      </CardHeader>
      <CardBody className="all-center">
        <Form>
          <div className="d-flex">
            <FormGroup className="p-1">
              <Label>First Name</Label>
              <Input
                className="bg-dark border-secondary text-secondary form-control rounded-pill"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormGroup>
            <FormGroup className="p-1">
              <Label>Last Name</Label>
              <Input
                className="bg-dark border-secondary text-secondary form-control rounded-pill"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormGroup>
          </div>
          <FormGroup className="p-1 col-12">
            <Label>Email</Label>
            <Input
              className="bg-dark border-secondary text-secondary form-control rounded-pill"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>

          <div className="d-flex flex-column">
            <Label>Phone Number</Label>
            <div className="d-flex">
              <div className="col-2 me-4">
                <Input
                  className="bg-dark border-secondary text-secondary form-control rounded-pill"
                  style={{ position: "relative", top: 0 }}
                  maxLength="2"
                  placeholder="CC"
                >
                  91
                </Input>
                <p
                  style={{ position: "relative", top: -30 }}
                  className="bg-dark col-1"
                >
                  +
                </p>
              </div>
              <FormGroup className="col-9 ">
                <Input
                  className="bg-dark border-secondary text-secondary form-control rounded-pill"
                  placeholder="Phone"
                  onChange={(e) => setPhone(e.target.value)}
                  maxLength="10"
                />
              </FormGroup>
            </div>
          </div>

          <FormGroup className="p-1" style={{ marginTop: "-25px" }}>
            <Label>Username</Label>
            <Input
              className="bg-dark border-secondary text-secondary form-control rounded-pill"
              placeholder="Enter your username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="p-1">
            <Label>Password</Label>
            <Input
              className="bg-dark border-secondary text-secondary form-control rounded-pill"
              placeholder="Enter a password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="p-1">
            <Label>Confirm Password</Label>
            <Input
              className="bg-dark border-secondary text-secondary form-control rounded-pill"
              placeholder="Confirm Password"
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </FormGroup>
        </Form>
      </CardBody>
      <CardFooter className="all-center flex-column">
        <p
          onClick={(e) => {
            props.toggleFormSwitch(!props.formSwitch);
          }}
          className="text-secondary"
        >
          Already registered?
        </p>
        <Button
          type="submit"
          className="rounded-pill w-25"
          onClick={(e) => {
            handleSubmit();
          }}
        >
          Register
        </Button>
      </CardFooter>
    </Card>
  );
}

export default RegisterForm;
