import React, { Fragment, useState } from "react";
import { InputField } from "../InputField/InputField";
import axios from "axios";

const Postdata = () => {
  const [firstName, setFirstName] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [stateOfOrigin, setStateOrigin] = useState("");
  const [getData, setgetData] = useState("");
  const [gender, setGender] = useState("");

  const updateData = {
    firstName,
    surName,
    email,
    phoneNumber,
    gender,
    stateOfOrigin,
  };

  const UpdateData = (e) => {
    console.log(updateData);
    // firstNam
    e.preventDefault();
  };

  console.log(getData);
 


  const Updatevalue = (e) => {
    e.preventDefault();
    let Value = getData;
    console.log(Value)

    // console.log(getData)
    // axios.get(`http://localhost:5000/biodata/${getData}`)
    // .then( function (response){
    //   const userData = response.data;
    // console.log(userData)
    // }).catch(function (error){
    //   console.log(error)
    // })
  

  };



 
  return (
    <Fragment>
      <div className="bg-blue-500 py-20">
        <form className="flex w-50 justify-center items-center mx-auto px-10">
          <InputField
            label="Enter Id"
            type="tel"
            onchange={(e)=> setgetData(e.target.value)}
          />

          <button
            className="bg-green-500 text-white rounded-md p-3 m-5 mt-10"
            onClick={Updatevalue}
          >
            Submit
          </button>
        </form>
      </div>

      <div className="center bg-blue-400 py-20">
        <form className="form">
          <InputField
            type="text"
            label="First Name"
            onchange={(e) => setFirstName(e.target.value)}
          />

          <InputField
            type="text"
            label="surname"
            onchange={(e) => setSurName(e.target.value)}
          />

          <InputField
            type="email"
            label="Email"
            onchange={(e) => setEmail(e.target.value)}
          />

          <InputField
            type="tel"
            label="Phone number"
            onchange={(e) => setPhoneNumber(e.target.value)}
          />

<InputField
type="text"
onchange={(e)=> setGender(e.target.value)}
label="Gender"/>

          <InputField
            type="text"
            label="State of origin"
            onchange={(e) => setStateOrigin(e.target.value)}
          />

          <div className="btn_container">
            <button
              className="createAcc_btn"
              type="submit"
              onClick={UpdateData}
            >
              Update Account
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Postdata;
