import React from "react";

function UserDetails() {
  return (
    <div className="text-white p-5 all-center flex-column">
      <div className="bg-primary all-center p-5 rounded-20 flex-column w-100">
        <div
          className="bg-white rounded-20 m-3"
          style={{ height: "100px", width: "100px" }}
        />
        <p>username</p>
      </div>
      <div className="bg-dark all-center flex-column mt-5">
        <div className="all-center">
          <div className="col-4">
            <h6>Name:</h6>
          </div>
          <div className="col-4" />
          <div className="col-12">
            <h6>Shreyas Joshi</h6>
          </div>
        </div>
        <div className="all-center">
          <div className="col-4">
            <h6>Email:</h6>
          </div>
          <div className="col-4" />
          <div className="col-12">
            <h6>shreyaspjoshi.14@gmail.com</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
