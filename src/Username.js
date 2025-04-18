import React, { useState } from 'react';

function Username() {
  const [username, setUsername] = useState("JohnDoe");
  const [buttonText, setButtonText] = useState("Set Username");

  const handleClick = () => {
    if (username === "JohnDoe") {
      setUsername("komal");
      setButtonText("Go to Default");
      alert("Username set to: komal");
    } else {
      setUsername("JohnDoe");
      setButtonText("Set Username");
      alert("Username reset to: JohnDoe");
    }
  };

  return (
    <div>
      <h2>Username: {username}</h2>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
}

export default Username;
