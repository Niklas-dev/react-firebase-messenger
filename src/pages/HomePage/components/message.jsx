import React, { Component } from "react";

function Message() {
  return (
    <div className="d-flex flex-row justify-content-start">
      <div
        style={{ width: "30%", minWidth: "200px", backgroundColor: "#DDDDDD" }}
        className="rounded p-2 my-2"
      >
        <p
          style={{ fontWeight: "600", fontSize: "16px" }}
          className="text-dark"
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        </p>
      </div>
    </div>
  );
}

export default Message;
