import React, { useState } from "react";
import { Button } from "reactstrap";
import MetaMaskFox from "../assets/MetaMask_Fox.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  console.log("navigate: ", navigate);
  const [isConnected, setIsConnected] = useState(false);

  const detectCurrentProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      console.log("Non-ethereum browser detected, install MetaMask");
    }
    return provider;
  };
  const onConnect = async () => {
    try {
      const currentProvider = detectCurrentProvider();
      if (currentProvider) {
        await currentProvider.request({ method: "eth_requestAccounts" });
      }
      setIsConnected(true);
    } catch (err) {
      console.log(err);
    }
  };
  onConnect();

  return (
    <div
      id="link-meta-mask"
      className="bg-dark all-center flex-column text-tertiary mt-2"
    >
      <h1>Link to MetaMask</h1>
      <div>
        <img
          src={MetaMaskFox}
          alt="MetaMask_Fox"
          style={{ position: "relative" }}
        />
        {isConnected && (
          <CheckCircleIcon
            style={{
              fontSize: "50px",
              position: "absolute",
              bottom: "28%",
              right: "43%",
            }}
          />
        )}
      </div>

      {isConnected && (
        <>
          <p>Successfully Linked</p>
        </>
      )}

      <Button
        color="tertiary"
        className="text-dark rounded-pill"
        onClick={() => {
          isConnected ? navigate("/gallery") : onConnect();
        }}
      >
        {isConnected ? <>Proceed to Gallery</> : <>Link to MetaMask</>}
      </Button>
    </div>
  );
}

export default Login;
