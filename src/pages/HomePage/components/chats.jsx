import React, { useEffect } from "react";
import Message from "./message";
import MyMessage from "./mymessage";

function Chats() {
  return (
    <div style={{ height: "100%" }} className="d-flex flex-column">
      <div
        style={{ width: "100%", height: "8vh" }}
        className="bg-light text-center d-flex flex-column justify-content-center sticky-top"
      >
        <h3>{"Mika"}</h3>
      </div>
      <div className="p-4 bg-muted">
        <Message />
        <MyMessage />
      </div>
      <div className="bg-white p-2 mt-auto d-flex flex-row justify-content-between sticky-bottom">
        <input
          style={{ height: "8vh", width: "80%", fontSize: "18px" }}
          className="p-2 form-control col-4"
          type="text"
          placeholder="Type a message..."
        />
        <button type="button" className="btn btn-outline-primary col-2 px-4">
          Send
        </button>
      </div>
    </div>
  );
}

export default Chats;
