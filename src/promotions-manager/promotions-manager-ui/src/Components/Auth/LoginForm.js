import React, { Component } from "react";
import axios from "axios";
import { FormGroup, Navbar, FormControl, Button, Form } from "react-bootstrap";
import * as routesConsts from "../../Consts/Routes";

const logInButtonStyle = {
  borderRadius: "20px",
};

const passwordStyle = {
  margin: "0 2% 0 2%",
};

const formGroupStyle = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  marginLeft: "60%",
};
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    let authReq = { email: this.state.email, password: this.state.password };
    axios.post(routesConsts.API_BASE + "auth/signin", authReq).then((res) => {
      console.log(res.data);

      if (res.data && res.data.success) {
        let user = { email: this.state.email };
        this.props.handleLoginSuccess(user);
      } else {
        //handle bad user password -> login failed
        alert("Bad email or password");
      }
    });
  }

  render() {
    return (
      <Navbar.Form>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup style={formGroupStyle}>
            <FormControl
              type="text"
              name="email"
              placeholder="Email"
              onChange={this.handleInputChange}
            />
            <FormControl
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleInputChange}
              style={passwordStyle}
            />
            <Button type="submit" bsStyle="success" style={logInButtonStyle}>
              LOGIN
            </Button>
          </FormGroup>
        </Form>
      </Navbar.Form>
    );
  }
}

export default LoginForm;
