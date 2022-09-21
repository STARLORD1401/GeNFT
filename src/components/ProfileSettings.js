import React from "react";
import { useState } from "react";
import Web3 from "web3";

function UserDetails() {
  const [account, setAccount] = useState("");

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
        <div
          className="bg-white rounded-20 m-3"
          style={{ height: "100px", width: "100px" }}
        />
        <p>username</p>
      </div>
      <div className="bg-dark all-center mt-5 w-100">
        <div className="all-center flex-column align-items-start col-4">
          <h6>Name:</h6>
          <h6>Email:</h6>
          <h6>Public Address:</h6>
        </div>

        <div className="all-center flex-column align-items-start col-4">
          <h6>Shreyas Joshi</h6>
          <h6>shreyaspjoshi.14@gmail.com</h6>
          <h6>{account}</h6>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
