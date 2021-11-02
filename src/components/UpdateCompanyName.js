import React, { useState, useContext } from "react";
import { AccountContext } from "./Account";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";

export default () => {
  const [company, setCompany] = useState("");

  const { getSession } = useContext(AccountContext);

  const onSubmit = (event) => {
    event.preventDefault();

    getSession().then(({ user, headers, token }) => {
      user.getUserAttributes((err, result) => {
          if (err) {
            alert(err)
            return
          }
          console.log("result");
          console.log(result);
        })
        console.log("token:" + token);
        console.log(headers);
        const attributes = [
          new CognitoUserAttribute({ Name: "custom:CompanyName", Value: company }),
        ];
  
        user.updateAttributes(attributes, (err, result) => {
          if (err) console.error(err);
          console.log("attribute result");
          console.log(result);
        });
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Set Company Name</label>
        <input
          value={company}
          onChange={(event) => setCompany(event.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};
