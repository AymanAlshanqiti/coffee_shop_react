import React, { Component } from "react";
import { deflate } from "zlib";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

class Profile extends Component {
  render() {
    return (
      <div className="row my-4">
        <div className="col-3 mx-4">
          <div class="card my-4 align-items-center" style={{ height: 500 }}>
            <img
              src={require("../../assets/images/cafe.png")}
              class="card-img-top my-2"
              alt="user_pic"
              style={{ width: 200, height: 200 }}
            />
            <div className="card-body text-center">
              <h5 className="card-title">@ayman</h5>
              <p className="card-text text-center" style={{ color: "#a2a2a2" }}>
                Ayman Alshanqiti
              </p>
              <div className="row justify-content-md-center my-5">
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="col-8 mx-4 my-4 text-center">
          <h2 style={{ color: "#fe687b" }}>
            <FontAwesomeIcon icon={faCoffee} style={{ color: "#fe687b" }} /> My
            Previas orders
          </h2>
          <br />
          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Cras justo odio
              <span
                class="badge badge-primary badge-pill"
                style={{ backgroundColor: "#fe687b" }}
              >
                14
              </span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Dapibus ac facilisis in
              <span
                class="badge badge-primary badge-pill"
                style={{ backgroundColor: "#fe687b" }}
              >
                2
              </span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Morbi leo risus
              <span
                class="badge badge-primary badge-pill"
                style={{ backgroundColor: "#fe687b" }}
              >
                1
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Profile;
