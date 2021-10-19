import React, { useState, useEffect } from "react";
import "./home.css";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import { useAuthState } from "react-firebase-hooks/auth";

import UserTab from "./components/usertab";
import PhoneNumber from "./components/phonenumber";
import Chats from "./components/chats";

const signOut = () => {
  auth.signOut();
};

const auth = firebase.auth();
const db = firebase.firestore();

function HomePage() {
  const [user] = useAuthState(auth);
  const [phonestatus, setPhonestatus] = useState("");

  const checkForPhone = async () => {
    db.collection("users")
      .doc(auth.currentUser.uid)
      .onSnapshot((doc) => {
        console.log("Current data: ", doc.data()["phone"]);
        let number = doc.data()["phone"];
        if (number === "null") {
          number = "";
        }
        setPhonestatus(number);
      });
  };

  checkForPhone();

  return (
    <div className="d-flex flex-row justify-content-end bg-white">
      {phonestatus ? (
        <div
          className="d-flex flex-column justify-content-left align-items-left flex-shrink-0 p-3 bg-light card sticky-top"
          style={{ width: "280px", height: "100vh" }}
        >
          <a
            href="a"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            <span className="fs-4">Messenger</span>
          </a>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto ">
            <li class="nav-item">
              <p href="#" className="nav-link link-dark active">
                Chats
              </p>
            </li>
            <UserTab number username />
            <li>
              <a
                href="#"
                className="nav-link link-dark border border-primary mx-2 my-1 text-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-person-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                  <path
                    fill-rule="evenodd"
                    d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                  />
                </svg>
              </a>
            </li>
          </ul>
          <button
            type="button"
            className="d-inline-flex justify-content-center align-items-center btn btn-light"
            onClick={signOut}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              class="bi bi-door-closed"
              viewBox="0 0 16 16"
            >
              <path d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2zm1 13h8V2H4v13z" />
              <path d="M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0z" />
            </svg>
          </button>
        </div>
      ) : null}

      <div className="d-flex flex-column bg-white" style={{ width: "100%" }}>
        {phonestatus ? <Chats /> : <PhoneNumber />}
      </div>
    </div>
  );
}

export default HomePage;
