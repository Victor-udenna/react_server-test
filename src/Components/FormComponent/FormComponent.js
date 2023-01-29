import React, { Fragment, useState } from 'react'

 const FormComponent = ({firstname, lastname, mail, telnumber, origin, Gender}) => {

  const [firstName, setFirstName] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [stateOfOrigin, setStateOrigin] = useState("");
  const [gender, setGender] = useState("");

let userData = {
  firstName,
  surName,
  email,
  phoneNumber,
  stateOfOrigin,
  gender
}


const UpdateData = (e) =>{
  e.preventDefault();
  console.log(userData)
  document.forms[0].reset();
}


  return (
<Fragment>
<form className='form  flex flex-col'>
<div className='input_container'>
<label className='input_label'>
<span className='label_text'>  First Name:</span>
  <input type="text"
  value={firstname}
  onChange = {(e)=> setFirstName(e.target.value)}
  />
</label>
</div>

<div className='input_container'>
<label className='input_label'>
<span className='label_text'>  Last Name:</span>
  <input type="text"
  value={lastname}
  onChange = {(e)=> setSurName(e.target.value)}/>
</label>
</div>

<div className='input_container'>
<label className='input_label'>
<span className='label_text'>Email:</span>
  <input type="email"
  value={mail}
  onChange = {(e)=> setEmail(e.target.value)}/>
</label>
</div>


<div className='input_container'>
<label className='input_label'>
  <span className='label_text'>Phone Number:</span>
  <input type="tel"
  value={telnumber}
  onChange={(e)=> setPhoneNumber(e.target.value)}/>
</label>
</div>

<div className='input_container'>
<label className='input_label'>
 <span className='label_text'> Gender:</span>
  <input type="text"
  value={origin}
  onChange={(e)=> setGender(e.target.value)}/>
</label>
</div>

<div className='input_container'>
<label className='input_label'>
<span className='label_text'>  State of Origin:</span>
  <input type="text"
  value={Gender}
  onChange={(e)=> setStateOrigin(e.target.value)}/>
</label>
</div>

<div className='btn_container'>
<button className='createAcc_btn'
 
 onClick={UpdateData}
 >Update Account</button>
</div>

  </form>
</Fragment>
  )
}


export default FormComponent;
