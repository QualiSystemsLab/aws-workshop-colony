import React, { Component } from 'react';
import {PageHeader, Button} from "react-bootstrap";
import FieldGroup from "../Helper/FieldGroup";
import SelectFieldGroup from "../Helper/SelectFieldGroup";
import {connect} from "react-redux";
import * as promotionActions from "../../Actions/PromotionActions";
import {bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";

class ManagePromotion extends  Component {
    constructor(props) {
        super(props)
        this.state = {
            promotion: Object.assign({}, this.props.promotion),
            isNew: !this.props.promotion._id,
            errors: {}
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handlePromotionSave = this.handlePromotionSave.bind(this);
        // this.handleManageCodesClick = this.handleManageCodesClick.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.promotion._id !== nextProps.promotion._id) {
            this.setState({
                promotion: Object.assign({}, nextProps.promotion),
                isNew: !nextProps.promotion._id,
                errors: {}
            });
        }
    }

    // handleManageCodesClick(event) {
    //     this.props.history.push('/promotion/' + this.props.promotion._id + '/codes');
    // }

    handlePromotionSave(event) {
        event.preventDefault();
        this.props.actions.savePromotion(this.state.promotion);
        this.props.history.push('/promotions');
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;

        if(name === "isActive") {
            value = value === 'true';
        }

        let promotion = this.state.promotion;
        promotion[name]= value;

        this.setState({
            promotion: promotion
        });
    }

    render(){
        // const manageCodesButtonsStyle = { 'margin': '0 0 0 10px'};
        const isNew = this.state.isNew;
        let pageHeader = !isNew ? "Edit Promotion" : "Add New Promotion";
        console.log('isNew promo: ' + isNew);
        console.log('promotion: ' + JSON.stringify(this.state.promotion));

        return (
            <div>
                <PageHeader>{pageHeader}</PageHeader>
                <form>
                    <FieldGroup
                        id="promotionId"
                        name="_id"
                        type="text"
                        label="Promotion Id"
                        value={this.state.promotion._id}
                        onChange={this.handleInputChange}
                        placeholder="Enter unique promotion id"
                        readOnly={!isNew}/>
                    <FieldGroup
                        id="promotionName"
                        name="promoName"
                        type="text"
                        label="Promotion Name"
                        onChange={this.handleInputChange}
                        value={this.state.promotion.promoName}
                        placeholder="Enter promotion name"/>
                    <FieldGroup
                        id="productName"
                        name="productName"
                        type="text"
                        label="Product Name"
                        onChange={this.handleInputChange}
                        value={this.state.promotion.productName}
                        placeholder="Enter product name"
                        help="The product name will be displayed to users viewing the promotion."/>
                    <FieldGroup
                        id="productUrl"
                        name="productUrl"
                        type="text"
                        label="Product Url"
                        onChange={this.handleInputChange}
                        value={this.state.promotion.productUrl}
                        placeholder="Enter product name" />
                    <SelectFieldGroup
                        id="promotionState"
                        name="isActive"
                        label="Promotion State"
                        onChange={this.handleInputChange}
                        value={this.state.promotion.isActive}
                        options={[{
                                value: true,
                                text: "Active"
                            },{
                                value: false,
                                text: "Not Active"
                            }
                        ]}
                        placeholder="Set promotion state"
                        help="Set the promotion active state.">
                    </SelectFieldGroup>
                    <div>
                        <Button bsStyle="primary" onClick={this.handlePromotionSave}>Save</Button>
                        {/* <Button bsStyle="default" onClick={this.handleManageCodesClick} disabled={this.state.isNew}
                                style={manageCodesButtonsStyle}>Manage Codes
                        </Button> */}
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    let promotion = null;
    if (ownProps.match.params.id && ownProps.match.params.id !== "new") {
        promotion = state.promotions.find(x => x._id === ownProps.match.params.id)
    }
    if(!promotion) {
        // set an empty course
        promotion = {_id: '', promoName: '', productName: '', productUrl: '', isActive: false, allocatedCodes: 0, numberOfCodes: 0};
    }
    return {
        promotion: promotion
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(promotionActions, dispatch)
    };
}

const connectStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default withRouter(connectStateAndProps(ManagePromotion));