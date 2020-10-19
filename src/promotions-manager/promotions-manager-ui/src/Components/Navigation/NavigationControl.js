import React, { Component } from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {Nav, NavItem} from "react-bootstrap";

class NavigationControl extends  Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect (eventKey) {
        this.props.history.push(eventKey);
    }

    render() {

        let promotionsNavItem = null;
        if(this.props.auth.isLoggedIn) {
            promotionsNavItem = <NavItem eventKey='/promotions'>Promotions</NavItem>;
        }

        return (
            <Nav onSelect={this.handleSelect}>
                {promotionsNavItem}
                <NavItem eventKey='/about'>About</NavItem>
            </Nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

const connectStateAndProps = connect(mapStateToProps);
export default withRouter(connectStateAndProps(NavigationControl));