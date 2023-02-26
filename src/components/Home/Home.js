import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import name from "../../Assets/Home/name (1).png"

function Home() {
  const isMobile = window.innerWidth <= 500;
  if (isMobile){
    return (
      <section>
        <Container fluid className="home-section" id="home">
          <Particle />
          <Container className="home-content">
            <Row>
              <Col md={40} className="home-header">
                <h1 style={{ paddingBottom: 15 , textAlign: "center", position: "relative"}} className="heading">
                  Hi there!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>
                </Col>
            </Row>
            <Row>
              <h1 style={{ paddingBottom: 0 , textAlign: "center"}}  className="heading-name">
                I'M{" "}</h1>
            </Row>
            <Row>
            <h1 style={{ paddingBottom: 30 , textAlign: "center"}} >
                <img src={name} style={{maxWidth: 400}}></img></h1>
            </Row>
            <Row>
              <div style={{ textAlign: "center", position: "relative", paddingLeft: 50 }} className="Typewriter__wrapper">
                <Type />
              </div>
            </Row>
          </Container>
        </Container>
        <Home2 />
      </section>
    );
  }
  else{
    return (
      <section>
        <Container fluid className="home-section" id="home">
          <Particle />
          <Container className="home-content">
            <Row>
              <Col md={40} className="home-header">
                <h1 style={{ paddingBottom: 15 , textAlign: "center", position: "relative"}} className="heading">
                  Hi there!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>
                <h1 style={{ paddingBottom: 30 , textAlign: "center"}}  className="heading-name">
                  I'M{" "}
                  <img src={name}></img>
                  {/* <strong  style={{ paddingBottom: 15 , textAlign: "center"}}  className="main-name"> ELLE SZABO</strong> */}
                </h1>
  
                <div style={{ textAlign: "center", position: "relative", paddingLeft: 50 }}>
                  <Type />
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
        <Home2 />
      </section>
    );
  }
  
}

export default Home;
