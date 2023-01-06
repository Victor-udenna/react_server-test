import React, {useState, useEffect} from 'react';
import axios from "axios";

 const FormComponent = () => {
     

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [Gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [stateorigin, setStateOrigin] = useState('')

    const userdetails = {
        firstName,
        lastName,
        email,
        Gender,
        phone,
        stateorigin

    }

    const SubmitData = (e)=>{
        e.preventDefault();
      useEffect(()=>{
        axios.post("http://localhost:5000/biodata", {
            
        })
      })
    }

  return (
    <div className='center'>
        <form className="form" onSubmit={SubmitData}>
    <div className="input_container">
   <label className="input_label"><span className="label_text">First name: </span>
   <input
 onChange={(e)=> setFirstName(e.target.value)}

   />
   </label>
</div>

<div className="input_container">
   <label className="input_label"><span className="label_text">Last name: </span>
   <input
   onChange={(e)=> setLastName(e.target.value)}
   />
   </label>
</div>


 <div className="input_subcontainer">
 <div className="input_container sub-container-item">
    <label className="input_label"><span className="label_text">Email: </span>
    <input
    onChange={(e)=> setEmail(e.target.value)}/>
    </label>
  </div>

  <div className="input_container sub-container-item">
    <label className="input_label"><span className="label_text">Gender: </span>
    <input
    onChange={(e)=> setGender(e.target.value)}
   />
    </label>
  </div>
 </div>

 <div className="input_subcontainer">
 <div className="input_container sub-container-item">
    <label className="input_label"><span className="label_text">PhoneNumber: </span>
    <input onChange={(e)=> setPhone(e.target.value)}/>
    </label>
  </div>

  <div className="input_container sub-container-item">
    <label className="input_label"><span className="label_text">State Of Origin </span>
    <input
    onChange={(e)=>setStateOrigin(e.target.value)}
   />
    </label>
  </div>
 </div>
<div className="btn_container">
<button className="createAcc_btn" type="submit">Create account</button>
</div>
</form>
    </div>
  )
}

export default FormComponent;