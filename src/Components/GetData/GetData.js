import React,{Fragment, useState, useEffect} from 'react';
import axios from "axios";
import Displaydata from './Displaydata';

 const GetData = () => {
    const [myresult, setMyresult] = useState([]);
    useEffect(()=>{
      axios.get("http://localhost:5000/biodata")
      .then( function (response){
        // handle success
        const result = response.data;
        setMyresult(result)
      }) 
      .catch(function (error){
        // handle error
        console.log(error)
      })
    }, [])
  return (
   <Fragment>
    <div className='bg-blue-400 pb-10 grid grid-cols-3'>
        {myresult.map((items)=>{
           return (<Displaydata
           key={items.id}
           firstName={items.firstName}
           lastName={items.LastName}
           stateOfOrigin={items.stateOfOrigin}
           gender={items.gender}
           phoneNumber={items.phoneNumber}
           email={items.email}
           />)
        })}
    </div>

  
     {/* <div>GetData</div> */}
   </Fragment>
  )
}

export default GetData;


