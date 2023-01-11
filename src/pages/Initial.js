import React from "react";
import ww from "../assets/images/ww.jpg";

// Initial component is a functional component used to display the introduction to the whatsapp web.
function Initial() {
  return (
    <div className="initial flex col rel ">
      <img src={ww} className="abc abs" />
      <h2 className="intro fs24 b myfontcolor abs abc aby">WhatsApp Web</h2>
      <div className="intro-text myfontcolor abs abc align">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Send and receive messages without keeping
        your phone online.
        <br />
        Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
      </div>
    </div>
  );
}

export default Initial;
