import React, { useState } from "react";
import UserPool from "../UserPool";

const Signup = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const attributeList = [];

    //form a json object containing Name and Value of attribute used
    const usernameattribute = {
        Name:'address',
        Value: address
    }
    const phoneNumberattribute = {
      Name:'phone_number',
      Value: phoneNumber
  }
  const EmailAttribute = {
    Name:'email',
    Value: email
}

    //Push list of attributes in the attributeList array
    console.log(phoneNumber);
    attributeList.push(usernameattribute);
    attributeList.push(phoneNumberattribute);
    attributeList.push(EmailAttribute);
    console.log(attributeList);
    const that = this;

    UserPool.signUp(username, password, attributeList, null, (err, data) => {
      if (err) {
        console.error(err);
      }
      console.log(data);
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="username">UserName</label>
        <input
          value={username}
          onChange={(event) => setUserName(event.target.value)}
        ></input>
         <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <label htmlFor="address">Address</label>
        <input
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        ></input>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
