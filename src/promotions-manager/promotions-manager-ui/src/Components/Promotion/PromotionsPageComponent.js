import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as promotionActions from "../../Actions/PromotionActions";
import PromotionsList from "./PromotionsListComponent";
import {PageHeader, Button} from "react-bootstrap";
import {withRouter} from "react-router-dom";


class PromotionsPage extends  Component {
    constructor(props) {
        super(props)
        //props.actions.loadPromotions();

        this.handleAddNewClick = this.handleAddNewClick.bind(this);
    }

    handleAddNewClick() {
        this.props.history.push('/promotion/new');
    }

    render(){
        return (
            <div>
                <PageHeader>Promotions</PageHeader>
                <Button bsStyle="primary" onClick={this.handleAddNewClick}>Add New</Button>
                <br/><br/><br/>
                <PromotionsList promotions={this.props.promotions}/>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        promotions: state.promotions
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(promotionActions, dispatch)
    };
}

const connectStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default withRouter(connectStateAndProps(PromotionsPage));