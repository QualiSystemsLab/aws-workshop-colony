import React from 'react';
import NavigationControl from "./Components/Navigation/NavigationControl";
import LoginControl from "./Components/Auth/LoginControl";
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";      

const Header = () => (   
    <Navbar inverse collapseOnSelect staticTop={true}>
        <Navbar.Header>   
            <Navbar.Brand>                
                <Link to='/'>Promo Manager</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <NavigationControl />
            <Nav pullRight>
                <LoginControl />
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default Header;