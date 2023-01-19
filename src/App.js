import React  from 'react';
import './App.css';
import { GetData } from './Components';
import {FormComponent} from "./Components";
function App() {
  return (
    <div className="App">
<div className='hidden'>
<GetData/>
</div>

<div className=''>
<FormComponent/>
</div>
</div>
  );
}

export default App;
