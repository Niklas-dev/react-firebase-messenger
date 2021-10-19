import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { useAuthState } from "react-firebase-hooks/auth";
const db = firebase.firestore();
const auth = firebase.auth();

const addPhone = async (phone) => {
  let uid = auth.currentUser.uid;
  await db.collection("users").doc(uid).set({ id: uid, phone: phone });
};

const PhoneNumber = () => {
  const [phone, setPhone] = useState("");
  return (
    <div
      className="card p-2 d-flex flex-column justify-content-center align-items-center"
      style={{
        width: "30%",
        height: "40%",
        minHeight: "250px",
        minWidth: "300px",
      }}
    >
      <h4 className="card-title p-4 text-center">Enter your number to start</h4>
      <p className="card-subtitle p-2">Used to identify the user</p>
      <input
        type="phone"
        className="form-control p-2"
        placeholder="+0000 / 0000000"
        onChange={(e) => setPhone(e.target.value)}
      />
      <button
        onClick={() => addPhone(phone)}
        type="button"
        class="btn btn-primary m-2"
      >
        Submit
      </button>
    </div>
  );
};

export default PhoneNumber;
