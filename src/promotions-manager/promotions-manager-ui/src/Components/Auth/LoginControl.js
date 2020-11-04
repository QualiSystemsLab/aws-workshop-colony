import React, { Component } from "react";
import { connect } from "react-redux";
import * as authActions from "../../Actions/AuthActions";
import * as promotionActions from "../../Actions/PromotionActions";
import LoginForm from "./LoginForm";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { Navbar, Button } from "react-bootstrap";
import axios from "axios";
import * as routesConsts from "../../Consts/Routes";

const Logout = function(props) {
  let userNameStyle = {
    margin: "0 10px 0 0",
  };

  return (
    <Navbar.Form>
      <Navbar.Link style={userNameStyle}>{props.userName}</Navbar.Link>
      <Button onClick={props.onClick} bsStyle="success">
        LOGOUT
      </Button>
    </Navbar.Form>
  );
};

class LoginControl extends Component {
  activeUserKey = "active_user";

  constructor(props) {
    super(props);
    this.handleLoginSuccess = this.handleLoginSuccess.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);

    let active_user = sessionStorage.getItem(this.activeUserKey);
    if (active_user) this.postLoginActions(JSON.parse(active_user));
  }

  handleLoginSuccess(user) {
    sessionStorage.setItem(this.activeUserKey, JSON.stringify(user)); // save user in session storage to login on page refresh
    this.postLoginActions(user);
  }

  postLoginActions(user) {
    this.props.authActions.userLogin(user);
    this.props.promotionActions.loadPromotions(); //TODO: refactor this into a "initUserData" service if more data needs to be loaded here
    if (this.props.location.pathname === "/") {
      this.props.history.push("/promotions");
    }
  }

  handleLogoutClick(event) {
    event.preventDefault();

    axios.post(routesConsts.API_BASE + "auth/signout").then((res) => {
      if (res.data && res.data.success) {
        sessionStorage.removeItem(this.activeUserKey);
        this.props.authActions.userLogout();
        this.props.history.push("/");
      } else {
        //handle bad user password -> login failed
        alert("Failed to logout your user. Please try again later.");
      }
    });
  }

  render() {
    const isLoggedIn = this.props.isLoggedIn;
    let button = null;

    if (isLoggedIn) {
      button = (
        <Logout
          onClick={this.handleLogoutClick}
          userName={this.props.user.email}
        />
      );
    } else {
      button = <LoginForm handleLoginSuccess={this.handleLoginSuccess} />;
    }

    return <div>{button}</div>;
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.auth.user,
    isLoggedIn: state.auth.isLoggedIn,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(authActions, dispatch),
    promotionActions: bindActionCreators(promotionActions, dispatch),
  };
}

const connectStateAndProps = connect(
  mapStateToProps,
  mapDispatchToProps
);
export default withRouter(connectStateAndProps(LoginControl));
