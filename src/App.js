import React from "react";
import UserInfo from "./UserInfo";

function App() {
  const loggedIn = false; // Replace with actual auth check (cookie or token)

  return (
    <div>
      <h1>React + SAML2 + OpenAM Demo</h1>
     <UserInfo />
    </div>
  );
}

export default App;