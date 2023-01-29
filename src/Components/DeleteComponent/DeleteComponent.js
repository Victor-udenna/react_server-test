import React, { Fragment, useState } from 'react';
import { InputField } from '../InputField/InputField';


 const DeleteComponent = () => {
const [Query, setQuery] = useState ("")

  return (
  <Fragment>
<div>
    <form>
        <InputField
        label="Enter user id"
        type="tel"
        onchange={(e)=> setQuery(e.target.value)}
        />
    </form>
</div>
  </Fragment>
  )
}


export default DeleteComponent;
