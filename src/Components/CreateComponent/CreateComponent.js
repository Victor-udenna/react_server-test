import React, { useState } from "react";
import axios from "axios";
import { InputField } from "../InputField/InputField";

const CreateComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [phonenumber, setPhone] = useState("");
  const [stateOfOrigin, setStateOrigin] = useState("");

  const userdetails = {
    firstName,
    LastName,
    email,
    gender,
    phonenumber,
    stateOfOrigin,
  };

  const SubmitData = (e) => {
    console.log(userdetails);
    e.preventDefault();

    axios
      .post("http://localhost:5000/biodata", {
        firstName,
        LastName,
        email,
        gender,
        phonenumber,
        stateOfOrigin,
      })
      .then((response) => console.log("posting data", response))
      .catch((error) => console.log(error));

      // window.location.reload();
      document.forms[0].reset();
  };

  return (
    <div className="center bg-blue-400 pb-20">
      <form
        className="form"
      >

        <InputField
        label="First name"
        onchange={(e)=> setFirstName(e.target.value)}
        type="text"
        />


        <InputField
        label="Last name"
        onchange={(e)=> setLastName(e.target.value)}
        type="text"/>
        

        <InputField
        label="Email"
        type="text"
        onchange={(e)=> setEmail(e.target.value)}/>


<InputField
type="tel"
onchange={(e)=> setPhone(e.target.value)}
label="Phone number"
/>

<InputField
type="text"
onchange={(e)=> setGender(e.target.value)}
label="Gender"/>


<InputField
type="text"
onchange={(e)=> setStateOrigin(e.target.value)}
label="State of Origin"/>

        <div className="btn_container">
          <button className="createAcc_btn" type="submit" onClick={SubmitData}>
            Create account
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateComponent;
