import React, { useState } from "react";
import './style.css';

export default function App() {
  const [name, setName] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = event => setName(event.target.value);

  const handleSubmit = name => {
    if (name.length < 6) {
      setErrorMessage("Username must be 6 character")
    } else {
      setErrorMessage("");
      setLoggedIn(true);
    }    
  };


  return (
    <div className="App">
      <h1>React Lessons</h1>
      {loggedIn ? (
        <React.Fragment>
          <h2>Welcome, {name}</h2>
          <button onClick={ () => setLoggedIn(false)}> Log Out </button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <input 
            name="name"
            placeholder="your name"
            value={name}
            onChange={handleChange}
          />
          <button onClick={() => handleSubmit(name)}>Enter</button>
          <br />
          {errorMessage 
            ? <h4> {errorMessage}</h4> 
            : <h2>Please Login</h2>}
        </React.Fragment>)}
    </div>
  );
}


