import React from "react";

const Overlay = props => {
  return (
    <div className="alert alert-info" role="alert">
      {props.children}
    </div>
  );
};

export default Overlay;
