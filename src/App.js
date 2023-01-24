import React, { Fragment }  from 'react';
import './App.css';
import { UpdatePage } from './Page';

function App() {
  return (


   <Fragment>
     {/* <div className="App grid grid-cols-4 gap-6 m-5  hidden">
<div className='font-bold text-xl bg-blue-300 py-10 rounded-lg hover:cursor-pointer text-center'>
  Create
</div>
<div className='font-bold text-xl bg-blue-300 py-10 rounded-lg hover:cursor-pointer text-center'>
  Read/Post
</div>
<div className='font-bold text-xl bg-blue-300 py-10 rounded-lg hover:cursor-pointer text-center'>Update</div>
<div className='font-bold text-xl bg-blue-300 py-10 rounded-lg hover:cursor-pointer text-center'>Delete</div>
    </div> */}

  <UpdatePage/>
    
   </Fragment>
  );
}

export default App;
