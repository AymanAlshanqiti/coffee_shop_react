import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

class Loading extends Component {
  render() {
    return (
      <div className="spinner mx-auto text-center">
        <FontAwesomeIcon icon={faSpinner} spin size="4x" />
      </div>
    );
  }
}

export default Loading;
