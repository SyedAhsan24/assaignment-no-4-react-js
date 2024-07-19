import React, { useState } from "react";
import "./App.css";

const Form = ({ setFormData }) => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    password: "",
    organizationName: "",
    organizationSize: "",
    industry: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(formValues);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <main>
            <div className="main">
              <div className="input">
                <label>First Name</label> <br />
                <br />
                <input
                  type="text"
                  name="firstName"
                  placeholder="Syed"
                  value={formValues.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <label>Last Name</label> <br />
                <br />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Ahsan"
                  value={formValues.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <br />
            <div className="child">
              <label>Work Email</label>
              <br />
              <br />
              <input
                className="input2"
                type="text"
                name="workEmail"
                placeholder="Syedahsan@gmail.com"
                value={formValues.workEmail}
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="child">
              <label>Password</label>
              <br />
              <br />
              <input
                className="input2"
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="child">
              <label>Organization Name</label>
              <br />
              <br />
              <input
                className="input2"
                type="text"
                name="organizationName"
                placeholder="ABC Organization"
                value={formValues.organizationName}
                onChange={handleChange}
              />
            </div>
            <br />
            <div>
              <label>Organization Size</label>
              <br />
              <br />
              <select
                className="select"
                name="organizationSize"
                value={formValues.organizationSize}
                onChange={handleChange}
              >
                <option hidden>select</option>
                <option value="option 1">option 1</option>
                <option value="option 2">option 2</option>
                <option value="option 3">option 3</option>
              </select>
            </div>
            <br />
            <div>
              <label>Industry</label>
              <br />
              <br />
              <select
                className="select"
                name="industry"
                value={formValues.industry}
                onChange={handleChange}
              >
                <option hidden>select</option>
                <option value="option 1">option 1</option>
                <option value="option 2">option 2</option>
                <option value="option 3">option 3</option>
              </select>
            </div>
          </main>
          <br />
          <p className="para">
            Formsstack has uploaded our Terms of service effective January 4,
            2023. <br />
            We encourage you to read the document in its entirety.
          </p>{" "}
          <br />
          <br />
          <div className="check">
            <input
              className="checkbox"
              type="checkbox"
              name="termsAccepted"
              checked={formValues.termsAccepted}
              onChange={handleChange}
            />
            <p className="para2">
              I understand and agree to the &nbsp;{" "}
              <a className="link" href="#">
                Formsstack privacy policy &nbsp;
              </a>
              <a className="link" href="#">
                software &nbsp;
              </a>
              <a className="link" href="#">
                Services Agreement &nbsp;
              </a>
              <br />
              and &nbsp;
              <a className="link" href="#">
                {" "}
                Acceptable use policy. &nbsp;
              </a>
            </p>
          </div>
          <br />
          <button type="submit" className="btn">
            Start Free Trial
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Form;
