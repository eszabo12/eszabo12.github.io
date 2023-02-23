import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={40} className="home-header">
              <h1 style={{ paddingBottom: 15 , textAlign: "center"}} className="heading">
                Hi there!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 style={{ paddingBottom: 15 , textAlign: "center"}}  className="heading-name">
                I'M
                <strong  style={{ paddingBottom: 15 , textAlign: "center"}}  className="main-name"> ELLE SZABO</strong>
              </h1>

              <div style={{ textAlign: "center" }}>
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

export default Home;
