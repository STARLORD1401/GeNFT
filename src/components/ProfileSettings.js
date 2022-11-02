import React from "react";
import { useState, useEffect } from "react";
import Web3 from "web3";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Button } from "reactstrap";
import { getUser } from "../helpers/auth";

function ProfileSettings() {
  useEffect(() => {
    setUserDetails(getUser());
  }, []);
  // Checking and importing cookies.
  const [userDetails, setUserDetails] = useState({});
  const [account, setAccount] = useState("");
  const navigate = useNavigate();
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
  //Checking connection with Ethereum wallet instance.
  const onConnect = async () => {
    try {
      const currentProvider = detectCurrentProvider();
      if (typeof window.ethereum !== "undefined") {
        console.log("MetaMask is installed!");
      }
      if (currentProvider) {
        await currentProvider.request({ method: "eth_requestAccounts" });
      }
      const web3 = new Web3(currentProvider);
      const userAccount = await web3.eth.getAccounts();
      setAccount(userAccount[0]);
    } catch (err) {
      console.log(err);
    }
  };
  onConnect();
  return (
    <div className="text-white p-5 all-center flex-column">
      <div className="bg-primary all-center p-5 rounded-20 flex-column w-100">
        <div className="d-flex justify-content-start w-100">
          {/* Back Button  */}
          <Button
            color="white"
            className="rounded-pill text-primary"
            onClick={() => {
              navigate("/");
            }}
          >
            <ArrowBackIosNewIcon />
          </Button>
        </div>
        <div
          className="bg-white rounded-20 m-3"
          style={{ height: "100px", width: "100px" }}
        />
        {/* Display Username  */}
        <p>{userDetails.username}</p>
      </div>
      <div className="bg-dark all-center mt-5 w-100">
        {/* Display Personal Details with the help of Cookies and ETH Wallet instance  */}
        <div className="all-center flex-column align-items-start col-4">
          <h6>Name:</h6>
          <h6>Email:</h6>
          <h6>Public Address:</h6>
        </div>

        <div className="all-center flex-column align-items-start col-4">
          <h6>
            {userDetails.first_name} {userDetails.last_name}
          </h6>
          <h6>{userDetails.email}</h6>
          <h6>{account}</h6>
        </div>
      </div>
    </div>
  );
}

export default ProfileSettings;
