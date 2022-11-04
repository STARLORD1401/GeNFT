import React, { useState, useContext } from "react";
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
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function LoginForm(props) {
  const { setUserDetails } = useContext(AuthContext);
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Function for saving Login Information into cookies after successful authentication with the backend.
  const handleSubmit = (e, value) => {
    const payload = { username, password };
    axios.post("/users/login", payload).then((res) => {
      const isUserSet = setUser(res.data);
      if (isUserSet) {
        setUserDetails(res.data);
        navigate("/");
      }
    });
  };
  return (
    // Login Card
    <Card
      className="text-primary p-0 bg-dark w-100"
      style={{ borderRadius: "20px" }}
    >
      {/* {shouldRedirect && <Redirect to="/" />} */}
      <CardHeader
        className="all-center"
        style={{
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        }}
      >
        <h2>Login</h2>
      </CardHeader>
      <CardBody className="all-center">
        <Form className="w-75">
          <FormGroup className="p-1 col-12">
            {/* Username Field  */}
            <Label>Username</Label>
            <Input
              className="bg-dark border-primary text-primary form-control rounded-pill"
              placeholder="Enter your username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="p-1">
            {/* Password Field  */}
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
        {/* Toggle for switching to Registration Form  */}
        <p
          onClick={(e) => {
            props.toggleFormSwitch(!props.formSwitch);
          }}
          className="mouse"
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
