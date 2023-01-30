import React, { Fragment, useState } from 'react';
import { InputField } from '../InputField/InputField';
import axios from 'axios';

 const DeleteComponent = () => {
const [Query, setQuery] = useState ("")
const [userinfo, setuserinfo] = useState ([]);

const Updatevalue =(e)=>{
    e.preventDefault();
    console.log(Query);
    axios.get(`http://localhost:5000/biodata/${Query}`)
    .then( function (response ){
const userdata = response.data
setuserinfo(userdata)
console.log(userdata)
console.log(userinfo)
alert("user retrieved succesfully")
console.log(response)
    }).catch(function (error){
        console.log(error)
      })
}

const deleteUser =(e)=>{
    e.preventDefault()
    axios.delete(`http://localhost:5000/biodata/${Query}`)
    .then(function(respone){
        console.log(respone)
        alert("deleted succesfully")
    }).catch(function (error){
        console.log(error)
    })
}

  return (
  <Fragment>
<div className='bg-blue-400 w-screen h-screen flex flex-col justify-center items-center'>
<div className='w-[400px]'>
    <form className=''>
        <InputField
        label="Enter user id"
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

    <div className='btn_container'>
   <button  className="createAcc_btn"
   onClick={deleteUser}>Delete user</button>
   </div>

</div>

  </Fragment>
  )
}


export default DeleteComponent;
