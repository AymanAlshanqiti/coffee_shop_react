import React, { Component } from "react";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

class Loading extends Component {
  render() {
    return (
      <div className="spinner mx-auto text-center my-5">
        <FontAwesomeIcon
          icon={faSpinner}
          spin
          size="4x"
          style={{ color: "#c7c7c7" }}
        />
      </div>
    );
  }
}

export default Loading;
