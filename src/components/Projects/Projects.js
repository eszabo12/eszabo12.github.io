import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import terrortops from "../../Assets/terrortops.jpg";
import pyribs from "../../Assets/lunar_lander.gif";
import pipeline from "../../Assets/capture.png";
import suicide from "../../Assets/Projects/suicide.png";
import mindpalace from "../../Assets/Projects/Mind_Palace.gif"
import vex from "../../Assets/vex_robot.gif";
import logo from "../../Assets/logo.png"
import stream from "../../Assets/Projects/stream.png"
import Tilt from "react-parallax-tilt";
import traffic from "../../Assets/Projects/traffic.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        {/* <Tilt> */}
        <h1 style={{ fontSize: "2em", paddingBottom: 30 }} className="about-me">
               <span className="purple">MY PROJECTS </span>
            </h1>
        {/* </Tilt> */}
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on (that I can show).
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logo}
              isBlog={false}
              title="Vision and Language Navigation"
              descrption="Conducting CoRL-aimed research on machine learning for robotic navigation with natural language and vision inputs under Jesse Thomason"
              skills="Python, OpenAI Gym, Pytorch, conda, RL, habitat-sim"
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="/"      <--------Please include a demo link here 
            />
          </Col> */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mindpalace}
              isBlog={false}
              title="VR Therapy for Alzheimer's"
              description="Developed an app for Oculus Quest to converse with an avatar, save stories, summarize, and generate images"
              gh={true}
              ghLink="https://github.com/eszabo12/VR_Alzheimer-s_Therapy"
              skills="C#, Unity, OpenAI API"
                          />
          </Col>
         
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vex}
              isBlog={false}
              gh={true}
              title="Autonomous Robot"
              description="Programmed vision-based autonomous scoring using an optical sensor to place rings on the goals’ branches. Created data frame to capture RGB-D images and perform custom object recognition"
              skills="Python, YOLO5V, Roboflow, C/C++"
              ghLink="https://github.com/uscvex/RobotCode/tree/master/TowerTakeover"
              // demoLink="/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pyribs}
              isBlog={false}
              gh={true}
              title="PyRibs"
              description="Main contributor to PyRibs, an open-source Python library for exploring the latent space of machine learning models. Used by researchers globally"
              ghLink="https://github.com/icaros-usc/pyribs/graphs/contributors"
              demoLink="https://docs.pyribs.org/en/stable/tutorials/lunar_lander.html"              
              skills="Python, JAX, numba, numpy, OpenAI Gym"
            />
          </Col>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={terrortops}
              isBlog={false}
              gh={false}
              title="Terrortops - BattleBots"
              description="Performed strength testing and assembled completely hand-crafted Battlebots robot. Competed in BattleBots World Championship VII as Alternate, rarely granted to non-experienced teams"
              // ghLink="/projects"
              demoLink="https://battlebots.fandom.com/wiki/Terrortops"    //  <--------Please include a demo link here 
              skills="drilling, tapping, assembling, painting, wiring, testing"
            
            />
          </Col> */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stream}
              isBlog={false}
              gh={true}
              title="Twitch Chat Sentiment Analysis"
              description="Developed for HackSC a chrome extension that scrapes Twitch chat data and visualizes sentiment in real time"
              ghLink="https://github.com/likhity/twitch-stream-chat-analyzer"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            skills="JavaScript, CSS, HTML, Flask, Socket.io, numpy"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pipeline}
              isBlog={false}
              gh={true}
              title="Image Capturing Pipeline"
              description="First open-source 3D image capturing pipeline for machine learning on Intel Realsense. Used by researchers ISAE-Supaero for ROBOTIS OpenManipulator computer vision project"
              skills="C/C++, Make, Boost, librealsense2"
              ghLink="https://github.com/eszabo12/image_capturing_pipeline"
              // demoLink="https://chatify-49.web.app/"
              skills="C/C++, Make, Boost, librealsense2"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={traffic}
              gh={true}
              isBlog={false}
              title="Computer Vision Projects"
              description="Detected common street signs using Haar Cascade classifiers with 96% accuracy in Python, etc."
              skills="keras, tensorflow, opencv, pillow, sklearn"
              ghLink="https://github.com/eszabo12/machine_learning_projects/tree/main/camera_stuff"
              // demoLink="/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logo}
              isBlog={false}
              gh={true}
              title="Mobile iOS Bird-esque Application"
              description="An iOS app that displays objects for rental with realtime Firebase database queries and Stripe checkout screen"
              ghLink="https://github.com/eszabo12/Mobile_iOS_Bird-esque_Application"
              // demoLink="https://plant49-ai.herokuapp.com/"
              skills="Swift, XCode, Firebase, Heroku, Stripe, Cocoapods"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logo}
              isBlog={false}
              gh={false}
              title="Smart Mirror"
              description="Designed a smart mirror from the ground up that sends weather and news data via a Raspberry Pi"
              skills="Raspberry Pi, Python, Embedded Systems, Woodworking"
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logo}
              isBlog={false}
              gh={true}
              title="Multi-Headed Encoder-Decoder Model"
              description="Implemented an Encoder-Decoder model that takes in ALFRED instructions for an entire episode and predicts the sequence of corresponding, high-level actions and target objects"
              skills="matplotlib, torch, sklearn, numpy"
              ghLink="https://github.com/eszabo12/CSCI499_NaturalLanguageforInteractiveAI/tree/main/hw3"
              // demoLink="/"      <--------Please include a demo link here 
            />
          </Col>        

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
