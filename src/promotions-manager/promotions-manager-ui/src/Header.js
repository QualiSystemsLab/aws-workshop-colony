import React from "react";
import NavigationControl from "./Components/Navigation/NavigationControl";
import LoginControl from "./Components/Auth/LoginControl";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import gourmetLogo from "./gourmetIncLogo.png";

const headerLogoStyle = {
  height: "30%",
  width: "30%",
};
const headerStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
};
const promoManagerStyle = {
  fontSize: "20px",
};
const Header = () => (
  <Navbar inverse collapseOnSelect staticTop={true}>
    <Navbar.Header style={headerStyle}>
      <Navbar.Brand>
        <img src={gourmetLogo} style={headerLogoStyle} alt="Gourmet Inc Logo" />
      </Navbar.Brand>
      <Navbar.Brand>
        <Link to="/" style={promoManagerStyle}>
          Promo Manager
        </Link>
      </Navbar.Brand>
      <NavigationControl />
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <LoginControl />
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
