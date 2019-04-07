import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import { Link } from "react-router-dom";

class RegistrationForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: ""
  };
  componentDidMount() {
    if (this.props.user) {
      this.props.history.push("/welcome");
    }
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e, type) => {
    e.preventDefault();
    if (type === "signup") {
      this.props.signup(this.state, this.props.history);
    } else {
      this.props.login(this.state, this.props.history);
    }
  };

  render() {
    const type = this.props.match.url.substring(1);
    return (
      <div className="card col-6 mx-auto p-0 mt-5">
        <div className="card-body">
          <h5 className="card-title mb-4" />
          <form onSubmit={event => this.submitHandler(event, type)}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Username"
                name="username"
                onChange={this.changeHandler}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                onChange={this.changeHandler}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="First Name"
                name="first_name"
                onChange={this.changeHandler}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Last Name"
                name="last_name"
                onChange={this.changeHandler}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Email"
                name="email"
                onChange={this.changeHandler}
              />
            </div>
            <input
              className="btn btn-danger btn-block"
              style={{ color: "#FFF", backgroundColor: "#fe687b" }}
              type="submit"
              value={type.replace(/^\w/, c => c.toUpperCase())}
            />
          </form>
        </div>
        <div className="card-footer text-center">
          <Link
            to={type === "login" ? "/signup" : "/login"}
            className="btn btn-small btn-link"
          >
            {type === "login"
              ? "Register an account"
              : "Login with an existing account"}
          </Link>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signup: (userData, history) =>
    dispatch(actionCreators.signup(userData, history))
});
const mapStateToProps = state => ({
  user: state.profileReducer.user
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationForm);
// export default connect(
//     mapStateToProps,
// )(RegistrationForm);
