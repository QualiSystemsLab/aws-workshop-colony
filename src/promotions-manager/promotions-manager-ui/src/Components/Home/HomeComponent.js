import React from "react";
import { Button, Form, FormControl, Grid, Row, Col } from "react-bootstrap";

import { withRouter } from "react-router-dom";

import gourmetLogo from "../../static/GourmetInc.svg";
import cloud from "../../static/Vectorcloud.svg";
import heart from "../../static/Vectorheart.svg";
import gear from "../../static/Uniongear.svg";

const globalFont = {
  fontFamily: "Comfortaa",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
};

const signUpSection = {
  backgroundColor: "#ecb807",
  margin: "0 -26.8% 0 -26.8%",
  width: "100%",
};

const signUpDiv = {
  padding: "50px 60px",
};

const signUpSectionCol = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const signUpHeader = {
  marginTop: "0",
  color: "black",
  textAlign: "center",
  textDecoration: "underline",
};

const signUpText = {
  width: "75%",
  marginTop: "0",
  color: "black",
  textAlign: "center",
  fontSize: "20px",
};

const btnCtaStyle = {
  margin: "0 0 0 40px",
  display: "inline-block",
  backgroundColor: "#ecb807",
};

const signUpButtonStyle = {
  borderRadius: "25px",
  
};

const myBtn = {
  backgroundColor: "#ecb807",
  fontFamily: "Comfortaa",
  textTransform: "uppercase",
  fontSize: "2rem",
  padding: "5px 15px 5px 15px",
  borderRadius: "20px",
  color: "white",
  boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
};

const servicesGrid = {
  textAlign: "center",
  marginTop: "10px",
};

const servicesGridH2 = {
  margin: "0 10px 40px 0",
  color: "#fff",
};

const servicesGridSub = {
  color: "#fff",
  fontSize: "23px",
  margin: "0 0 35px 0",
};

const serviceTitle = {
  color: "#fff",
  fontSize: "30px",
};
const serviceDescription = {
  color: "#fff",
};

const servicesSection = {
  backgroundColor: "rgb(97, 165, 62)",
  padding: "40px 0",
  width: "100%",
};

const pricingDiv = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  width: "100%",
  height: "200px",
};

const headwelcome = {
  textAlign: "center",
  color: "rgb(97, 165, 62)",
};
const headerLogoStyle = {
  height: "60%",
  width: "15%",
};

const titleSection = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "120px",
};

const pricingHeader = {
  margin: "0.5%",
};

const cloudIcon = {
  height: "35%",
  width: "35%",
};

const heartIcon = {
  height: "27.5%",
  width: "27.5%",
};

const servicesTitle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
};
const Home = () => (
  <>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Comfortaa"
    />
    <div style={globalFont}>
      <section style={titleSection}>
        <img src={gourmetLogo} style={headerLogoStyle} alt="Gourmet Inc Logo" />
        <h1 style={headwelcome}>
          Welcome to the Gourmet Inc. Promotions Manager Website
        </h1>
      </section>
      <section style={servicesSection}>
        <Grid style={servicesGrid}>
          <Row style={servicesTitle}>
            <h2 style={servicesGridH2}>Services:</h2>
            <h2 style={servicesGridSub}>What we offer</h2>
          </Row>
          <Row>
            <Col md={4}>
              <img src={cloud} alt="cloud icon" style={cloudIcon} />
              <h4 style={serviceTitle}>Platforms</h4>
              <p style={serviceDescription}>
                We support all social media platforms
              </p>
            </Col>
            <Col md={4}>
              <img src={gear} alt="gear icon" />
              <h4 style={serviceTitle}>Functionality</h4>
              <p style={serviceDescription}>We have many awesome features</p>
            </Col>
            <Col md={4}>
              <img src={heart} alt="heart icon" style={heartIcon} />
              <h4 style={serviceTitle}>Passion</h4>
              <p style={serviceDescription}>
                Made with love by passionate marketers
              </p>
            </Col>
          </Row>
        </Grid>
      </section>
      <section style={pricingDiv}>
        <h1 style={pricingHeader}>Pricing:</h1>
        <h3>We offer the most competitive pricing</h3>
      </section>
      <section style={signUpSection}>
        <Grid style={signUpDiv}>
          <Row>
            <Col style={signUpSectionCol}>
              <h2 style={signUpHeader}>Sign up for a FREE trial</h2>
              <p style={signUpText}>
                The Promotions Manager is launching soon. Leave your email at
                the bottom to get a FREE 60 days trial when we launch
              </p>
              <Form inline>
                <FormControl type="text" placeholder="Enter your email" />
                <div style={btnCtaStyle}>
                  <Button bsStyle="success" style={signUpButtonStyle}>
                    SIGN ME UP
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Grid>
      </section>
    </div>
  </>
);

export default Home;
