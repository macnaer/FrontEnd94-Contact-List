import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Include components

const App = () => {
  return (
    <Fragment>
      <div className="main">
        <h1 className="main_header">Header</h1>
      </div>
    </Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
