import React from "react";

const DisplayData = ({ data }) => {
  return (
    <div>
      <h2>Form Data</h2>
      <p>First Name: {data.firstName}</p>
      <p>Last Name: {data.lastName}</p>
      <p>Work Email: {data.workEmail}</p>
      <p>Password: {data.password}</p>
      <p>Organization Name: {data.organizationName}</p>
      <p>Organization Size: {data.organizationSize}</p>
      <p>Industry: {data.industry}</p>
      <p>Terms Accepted: {data.termsAccepted ? "Yes" : "No"}</p>
    </div>
  );
};

export default DisplayData;
