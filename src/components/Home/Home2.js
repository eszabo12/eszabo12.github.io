import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
/*

Hi I'm Elle.
I'm fluent in Python and C++, and have worked at Microsoft and NASA JPL, among others.
My field of interests are building applications to increase efficiency of human life, and intelligent systems.

I'm a researcher at ICAROS Lab USC, prefer smaller teams to large ones, and tabs to spaces.

In my free time, I create projects you can check out here.
*/
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            {/* <Tilt options={{ max : 2, perspective:    2,}}> */}
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            {/* </Tilt> */}
            <p className="home-about-body">
             I'm a senior at <a href="https://www.w3schools.com/Css/tryit.asp?filename=trycss_link">USC</a> studying Computer Science.
             <br />
             <br />
              Currently I'm researching &nbsp;
                <b className="purple">Robotic Navigation in Continuous Environments</b> 
                at {" "}<a href="url">GLAMOR Lab</a>{" "}, and I've also worked on{" "}<b className="purple">Quality Diversity</b> at <a href="url">ICAROS Lab.</a> 
                <br />
              <br />
              I have worked at Microsoft and NASA JPL, among others.
My interests are building applications to increase efficiency of human life, and intelligent systems. 
  My experiences lie in &nbsp;
              <i>
                <b className="purple">Machine Learning & Perception</b> and
                also in{" "}
                <b className="purple">
                  Backend Systems, IoT,
                </b>
                {" "}but always{" "}
                <b className="purple">Whatever Stack Fits.</b>
              </i>
              <br />
              <br />I've gained fluency in
              <i>
                <b className="purple"> C++</b>{" "}and{" "}<b className="purple"> Python</b>, and have dabbled with
                <b className="purple"> Javascript,</b>
                <b className="purple"> Swift,</b>
                <b className="purple"> C#,</b>{" "}and{" "}
                <b className="purple"> SQL</b>.
              </i>
              <br /> 
              <br />
              In my free time, I create projects you can check out <a href="/project">here</a>.
              I've built a <a href="url">VR App,</a> {" "}
              <a href="url">Web Extension,</a> {" and "}
              <a href="url">Smart Mirror,</a>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="purp_avatar" style={{ maxHeight: "800px" }}/>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
