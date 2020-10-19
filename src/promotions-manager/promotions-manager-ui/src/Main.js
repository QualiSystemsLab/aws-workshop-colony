import React from 'react';
import {Grid, Col, Row} from "react-bootstrap";
import MainRouter from "./MainRouter";

const Main  = () => (
    <Grid fluid={true}>
        <Row>
            <Col md={8} mdOffset={2}>
                <MainRouter />
            </Col>
        </Row>
    </Grid>
)

export default Main;
