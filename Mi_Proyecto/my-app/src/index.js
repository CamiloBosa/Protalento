import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Greeting() {
  const married = false;
  return(
  <div>
    <h1>{married.toString()}</h1>
  </div>
    ); 
  }
/*
function Greeting() {
  const user = {
    firstName: "Ryan",
    lastName: "Ray",
  };
  return (
    <div>
      <h1>{user.firstName}</h1>
      <h3>{user.lastName}</h3>
    </div>
  );
}
*/
root.render(
  <div>
    <Greeting />
    <Greeting />
    <Greeting />
    <Greeting />
  </div>
);
