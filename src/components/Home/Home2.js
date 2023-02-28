import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Avatars/transparent_web.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail
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
        <Col md={4} className="myAvtar">
            {/* <Tilt> */}
              <img src={myImg} className="img-fluid" alt="purp_avatar" style={{paddingRight: 40, maxHeight: "900px" }}/>
            {/* </Tilt> */}
          </Col>
          <Col md={8} className="home-about-description">
            {/* <Tilt > */}
            <h1 style={{ fontSize: "2.6em" }} className="about-me">
              ABOUT <span className="purple"> ME </span>
            </h1>
            {/* </Tilt> */}
            <p className="home-about-body">
             I'm a senior at <a href="https://viterbischool.usc.edu/">USC</a> studying Computer Science.
             <br />
             <br />
              Currently I'm researching &nbsp;
                <b className="purple">Robotic Navigation in Continuous Environments</b> 
                {" "}at {" "}<a href="https://glamor-usc.github.io/">GLAMOR Lab</a>{" "}, and I've also worked on{" "}<b className="purple">Quality Diversity</b> at <a href="http://icaros.usc.edu/">ICAROS Lab.</a> 
                <br />
              <br />
              I have worked at Microsoft and NASA JPL, among others.
My interests are building applications to increase efficiency of human life, and intelligent systems. 
  My experiences lie in{" "}
                <b className="purple">Machine Learning & Perception</b> and
                also in{" "}
                <b className="purple">
                  Backend Systems</b>{" "}and{" "}<b className="purple">IoT.
                </b>
                {/* {" "}but always{" "}
                <b className="purple">Whatever Fits.</b> */}
              <br />
              <br />I've gained familiarity with
                <b className="purple"> Python,</b>{" "}<b className="purple"> C++,</b>
                <b className="purple"> Javascript,</b>
                <b className="purple"> Swift,</b>
                <b className="purple"> C#,</b>{" "}and{" "}
                <b className="purple"> SQL</b>, but everything is easy once you've used <b className="purple">C</b>.
              <br /> 
              <br />
              In my free time, I create projects you can check out <a href="/project">here</a>.
              I've built a VR App, Web Extension, and Smart Mirror.
              {/* <a href="url">VR App,</a> {" "}
              <a href="url">Web Extension,</a> {" and "}
              <a href="url">Smart Mirror,</a>. */}
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <div className="connect-with-me">
            <r>CONNECT WITH ME</r> </div>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/eszabo12"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/elle-szabo/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
              <a
                href="mailto:eszabo@usc.edu"
                target="_blank" 
                rel="noopener noreferrer"
                className="icon-colour  home-social-icons"

              >
                <AiOutlineMail />
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
