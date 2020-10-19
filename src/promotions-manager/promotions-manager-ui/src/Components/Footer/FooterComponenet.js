import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Grid, Row, Col} from 'react-bootstrap'
import {withRouter} from "react-router-dom";
import * as publicInfoActions from "../../Actions/PublicInfoActions";

const footerGridStyle = {
    background: '#dcdcdc'
}
const mainColStyle = {
    padding: '20px 0'
}

class FooterControl extends  Component {
    constructor(props) {
        super(props);
        
        this.state = {
            version: null
        };
    }

    componentDidMount() {
        this.props.publicInfoActions.fetchVersion();
    }

    render() {
        let uiBuildNumber = process.env.REACT_APP_BUILD_NUMBER || 'dev';
        
        let apiBuildNumber = this.props.version ? this.props.version.apiBuildNumber : '';
        let apiBuildNumberLabel = null;
        if(apiBuildNumber) {
            apiBuildNumberLabel = <div>API Build Number: <b>{apiBuildNumber}</b></div>;
        }

        let releaseNumber = this.props.version ? this.props.version.releaseNumber : '';
        let releaseNumberLabel = null;
        if(releaseNumber) {
            releaseNumberLabel = <div>Realease Number: <b>{releaseNumber}</b></div>;
        }

        return(
            <div>
                <Grid fluid={true} style={footerGridStyle}>
                    <Row>
                        <Col md={8} mdOffset={2} style={mainColStyle}>
                            <div>UI Build Number: <b>{uiBuildNumber}</b></div>
                            {apiBuildNumberLabel}
                            {releaseNumberLabel}
                        </Col>
                    </Row>
                </Grid>    
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    let version = null;
    if (state.publicInfo && state.publicInfo.version){ 
        version = state.publicInfo.version;
    }
    return {
        version: version
    };
}

function mapDispatchToProps(dispatch) {
    return {
        publicInfoActions: bindActionCreators(publicInfoActions, dispatch)
    };
}

const connectStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default withRouter(connectStateAndProps(FooterControl));