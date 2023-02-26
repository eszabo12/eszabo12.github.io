import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Resume/Elle_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import resumeLink from "../../Assets/Resume/Elle_Resume_CVML.pdf"
import ml from "../../Assets/Resume/Elle_Resume_CVML.pdf"
import robotics from "../../Assets/Resume/Elle_Resume_Robotics.pdf"
import webdev from "../../Assets/Resume/Elle_Resume_Webdev.pdf"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

var link = resumeLink;

function setML(){
  link = ml;
  var res = document.getElementById("docimage");
  res.setAttribute("file", ml);
    // window.location.resrow.reload();
}
function setRob(){
  var res = document.getElementById("docimage");
  res.setAttribute("file", robotics);  // window.location.reload();
}
function setWD(){
  var res = document.getElementById("docimage");
  res.setAttribute("file", webdev);
  console.log("setwd");
  // window.location.resrow.reload();
}

function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            target="_blank"
            onClick={(evt) => {
              setML();
            }}
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
          <Button
            variant="primary"
            target="_blank"
            onClick={(evt) => {
              setRob();
            }}            
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
           <Button
            variant="primary"
            target="_blank"
            onClick={(evt) => {
              setWD();
            }}            
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>

        <Row className="resume">
          <Document file={link} className="d-flex justify-content-center" id="docimage">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            target="_blank"
            href={link}
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
          </Row>
      </Container>
    </div>
  );
}

export default Resume;
