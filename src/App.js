import "./App.css";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import LoginPage from "./pages/LoginPage/loginpage";
import HomePage from "./pages/HomePage/homepage";
import React from "react";

const auth = firebase.auth();
function App() {
  const [user] = useAuthState(auth);
  return (
    <React.Fragment className="App">
      {user ? <HomePage /> : <LoginPage />}
    </React.Fragment>
  );
}

export default App;
