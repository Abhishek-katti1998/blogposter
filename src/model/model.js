import ReactDOM from "react-dom";
import React from "react";

const Model = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(props.children, document.getElementById("model"))}
    </React.Fragment>
  );
};
export default Model;
