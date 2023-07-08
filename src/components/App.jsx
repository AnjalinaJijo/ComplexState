import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({ fName: "", lName: "" });

  function handleChange(event) {
    const { name, value } = event.target;

    // const newVal = event.target.value;
    // const inputName=event.target.name;
    // to know which input lname or fname triggered the function

    // call the function setfullname and pass another func called prevVal to it
    setFullName((prevVal) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevVal.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevVal.fName,
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <p>{fullName.email}</p>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          val={fullName.fName}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          val={fullName.lName}
        />
        <input name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
