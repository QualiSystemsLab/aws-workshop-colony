import React from 'react';
import {Button, Form, FormControl, Grid, Row, Col} from 'react-bootstrap';

const signUpSection = {
    backgroundColor: '#ecb807',
    margin: '0 -26.8% 0 -26.8%',
}
const signUpDiv = {
    padding: '50px 60px'
}

const signUpHeader = {
    marginTop: '0'
}

const btnCtaStyle = {
    margin: '0 0 0 20px',
    display: 'inline-block'
}

const roundIcon = {
    backgroundColor: '#fff',
    color: 'rgb(97, 165, 62)',
    height: '11rem',
    width: '11rem',
    display: 'block',
    lineHeight: '11.5rem',
    fontSize: '4rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '50%',
    textAlign: 'center'
}

const servicesGrid = {
    textAlign: 'center',
    marginTop: '10px'
}

const servicesGridH5 = {
    margin: 0,
    color: 'rgb(45, 45, 45)',
}
const servicesGridH2 = {
    margin: '0 0 40px 0',
    color: '#fff'
}

const serviceTitle = {
    color: '#fff'
}
const serviceDescription = {
    color: '#fff'
}

const servicesSection = {
    margin: '60px -26.8% 0 -26.8%',
    backgroundColor: 'rgb(97, 165, 62)',
    padding: '40px 0'
}

const pricingDiv = {
    textAlign: 'center',
    padding: '50px 0 80px 0'
}

const Home = () => (
    <div>
        <h1>Welcome to the Promotions Manager website!</h1>
        <section style={servicesSection}>
            <Grid style={servicesGrid}>
                <Row>
                    <h5 style={servicesGridH5}>SERVICES</h5>
                    <h2 style={servicesGridH2}>What We Offer</h2>
                </Row>
                <Row>
                    <Col md={3} mdOffset={1}>
                        <span style={roundIcon}>              
                            <i className="glyphicon glyphicon-cloud" aria-hidden="true"></i>
                        </span>
                        <h4 style={serviceTitle}>Platforms</h4>
                        <p style={serviceDescription}>We support all social media platforms</p>
                    </Col>
                    <Col md={3}>
                        <span style={roundIcon}>              
                            <i className="glyphicon glyphicon-cog" aria-hidden="true"></i>
                        </span>
                        <h4 style={serviceTitle}>Functionality</h4>
                        <p style={serviceDescription}>We have many awesome features</p>
                    </Col>                    
                    <Col md={3}>
                        <span style={roundIcon}>              
                            <i className="glyphicon glyphicon-heart" aria-hidden="true"></i>
                        </span>
                        <h4 style={serviceTitle}>Passion</h4>
                        <p style={serviceDescription}>Made with love by passionate marketers</p>
                    </Col>
                </Row>
            </Grid>
        </section>
        <section>
            <div style={pricingDiv}>
                <h1>PRICING</h1>
                <h3>We offer the most competetive pricing</h3>
                <Button bsStyle="primary" bsSize="large">Learn More</Button>
            </div>
        </section>
        <section style={signUpSection}>
            <Grid style={signUpDiv}>
                <Row>
                    <Col md={10} mdOffset={2}>
                        <h2 style={signUpHeader}>Sign up for a FREE trial</h2>
                        <p>
                            The Promotions Manager is launching soon. Leave your email at the bottom to get a free 60 days trial whwn we launch.
                        </p>
                        <Form inline>
                            <FormControl type="text" placeholder="Enter your email" />
                            <div style={btnCtaStyle}><Button bsStyle="primary">Sign me up!</Button></div>
                        </Form>
                    </Col>
                </Row>
            </Grid>
        </section>
    </div>
)

export default Home;