import React, { useState, useEffect } from "react";
import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GoogleLogo from "./assets/google_logo.png";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { doc, setDoc } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

import { useAuthState } from "react-firebase-hooks/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCo124Dr05GkWH5faKt7ohvSB-xS6l4u9U",
  authDomain: "react-firebase-messenger-79fc5.firebaseapp.com",
  projectId: "react-firebase-messenger-79fc5",
  storageBucket: "react-firebase-messenger-79fc5.appspot.com",
  messagingSenderId: "20413919319",
  appId: "1:20413919319:web:a531767713bbce5b13b312",
});

const auth = firebase.auth();
const db = firebase.firestore();

const signInWithGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  await auth.signInWithPopup(provider);
  console.log("log");
};

const signOut = () => {
  auth.signOut();
};

function LoginPage(props, children) {
  const [user] = useAuthState(auth);

  return (
    <div className="page d-flex flex-row justify-content-center align-items-center bg-white">
      <div
        className="card p-2"
        style={{
          width: "25%",
          height: "50%",
          minHeight: "400px",
          minWidth: "300px",
        }}
      >
        <h1 className="card-title text-center">Login</h1>
        <p className="text-center " style={{ fontSize: "14px" }}>
          Use your Google Account to start chatting.
        </p>
        <div
          className="d-flex flex-row justify-content-center align-items-center"
          style={{ height: "80%" }}
        >
          <button
            type="button"
            class="btn btn-white"
            onClick={signInWithGoogle}
          >
            <img
              className="img-thumbnail bg-whitw"
              style={{ width: "100px", height: "100px", border: "none" }}
              src={GoogleLogo}
              alt=""
            />
          </button>
        </div>
        <p className="container text-center text-secondary">Beta</p>
      </div>
    </div>
  );
}

export default LoginPage;
