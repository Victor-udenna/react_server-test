import React, { Fragment, useState } from "react";
import { InputField } from "../InputField/InputField";
// import FormComponent from "../FormComponent/FormComponent";
import axios from "axios";

const Postdata = () => {


  const [firstName, setFirstName] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [stateOfOrigin, setStateOrigin] = useState("");
  const [gender, setGender] = useState("");
  const [Query, setQuery] = useState("")
  const [result, setresult] = useState([])

  const updateData = {
    firstName,
    surName,
    email,
    phoneNumber,
    gender,
    stateOfOrigin,
  };

  const Updatevalue = (e) => {
    e.preventDefault();
    document.forms[0].reset();
    console.log(Query)
    axios.get(`http://localhost:5000/biodata/${Query}`)
    .then( function (response){
      const userData = response.data;
      console.log(userData);
      alert("user recieved, Update user details below")
      return userData;
    }).catch(function (error){
      console.log(error)
    })
   

  };

  const UpdateData = (e) => {
    console.log(updateData);
    e.preventDefault();
    alert('details updated successfully')
    axios.put(`http://localhost:5000/biodata/${Query}`, {
      firstName,
      surName,
      email,
      phoneNumber,
      gender,
      stateOfOrigin,
    })
  };



 
  return (
    <Fragment>

<div className="bg-blue-400 pb-10">
<div className=" py-10">
        <form className="flex w-50 justify-center items-center mx-auto px-10">
          <InputField
            label="Enter Id"
            type="tel"
            onchange={(e)=> setQuery(e.target.value)}
          />

          <button
            className="bg-green-500 text-white rounded-md p-3 m-5 mt-10"
            onClick={Updatevalue}
          >
            Submit
          </button>
        </form>
      </div>

      <div className=" center  py-20 w-100 edit_form">
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
</div>
    </Fragment>
  );
};

export default Postdata;
