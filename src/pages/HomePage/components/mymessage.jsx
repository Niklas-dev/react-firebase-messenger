import React, { Component } from "react";

function MyMessage() {
  return (
    <div className="d-flex flex-row justify-content-end">
      <div
        className="rounded p-2 my-2"
        style={{ width: "30%", minWidth: "200px", backgroundColor: "#DDDDDD" }}
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

export default MyMessage;
