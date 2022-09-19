import React, { useState } from "react";
import axios from "../axios.js";
import { setUser } from "../helpers/auth";
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
import { Navigate } from "react-router-dom";

function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const handleSubmit = (e, value) => {
    const payload = { username, password };
    axios.post("/users/login", payload).then((res) => {
      const isUserSet = setUser(res.data);
      if (isUserSet) {
        setShouldRedirect(true);
      }
    });
  };
  return (
    <Card
      className="text-primary p-0 bg-dark w-100"
      style={{ borderRadius: "20px" }}
    >
      {" "}
      {shouldRedirect && <Navigate to="/gallery" />}
      <CardHeader
        className="all-center"
        style={{
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        }}
      >
        <h2>Login</h2>
      </CardHeader>
      <CardBody>
        <Form>
          <FormGroup className="p-2">
            <Label>Username</Label>
            <Input
              className="bg-dark border-primary text-primary form-control rounded-pill"
              placeholder="Enter your username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="p-2">
            <Label>Password</Label>
            <Input
              className="bg-dark border-primary text-primary form-control rounded-pill"
              placeholder="Enter a password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
        </Form>
      </CardBody>
      <CardFooter className="all-center flex-column">
        <p
          onClick={(e) => {
            props.toggleFormSwitch(!props.formSwitch);
          }}
        >
          Haven't registered yet?
        </p>
        <Button
          color="primary"
          type="submit"
          className="rounded-pill w-25"
          onClick={(e) => {
            handleSubmit();
          }}
        >
          Login
        </Button>
      </CardFooter>
    </Card>
  );
}

export default LoginForm;