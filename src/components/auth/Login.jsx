import React, { PureComponent } from "react";
import { TextField, InputAdornment } from "@material-ui/core";
import Modal from "react-modal";
import "./Login.css";

const customStyles = {
  overlay: {
    position: "absolute",
    zIndex: "1031",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    color: "red",
  },
};

export class Login extends PureComponent {
  state = {
    email: "",
    password: "",
    isModalOpen: true,
  };

  handleFieldChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleLogin = (event) => {
    event.preventDefault();

    sessionStorage.setItem(
      "credentials",
      JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      })
    );
  };

  render() {
    return (
      <Modal isOpen={this.state.isModalOpen} style={customStyles}>
        <div className="login-container">
          <h3 className="login-header">Please log in:</h3>
          <TextField
            className="login-textInput"
            id="name"
            label="User Name"
            onChange={this.handleFieldChange}
          />
        </div>
      </Modal>
    );
  }
}
