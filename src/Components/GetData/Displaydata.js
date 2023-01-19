import React, { Fragment } from "react";

const Displaydata = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  gender,
  stateOfOrigin,
}) => {
  return (
    <Fragment>
      <div className="label ">
        <div>
          FirstName: <span> {firstName}</span>
        </div>
        <div>
          LastName: <span> {lastName}</span>
        </div>
        <div>
          Email: <span> {email}</span>
        </div>
        <div>
          PhoneNumber: <span> {phoneNumber}</span>
        </div>
        <div>
          Gender: <span> {gender}</span>
        </div>
        <div>
          StateOfOrigin: <span> {stateOfOrigin}</span>
        </div>
      </div>
    </Fragment>
  );
};

export default Displaydata;
