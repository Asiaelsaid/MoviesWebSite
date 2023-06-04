import React from "react";
import "./skills.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBarComponent from "../progress/progress";

export default class Skills extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container className="bg-secondary text-light">
          <Row >
            <Col>
              <h1 className="main">Skills </h1>
              <p className="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil, eveniet aliquid culpa
                officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia.
                Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                sapiente officiis modi at sunt excepturi expedita sint? Sed
                quibusdam recusandae alias error harum maxime adipisci amet
                laborum. Perspiciatis minima nesciunt dolorem! Officiis iure
                rerum voluptates a cumque velit quibusdam sed amet tempora. Sit
                laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim
                commodi iusto libero magni deleniti quod quam consequuntur!
              </p>
            </Col>
          </Row>
          <Row>
            <Col  className="myFocus">
            <h3 >My Focus</h3 ><hr></hr>
            <p>UI/UX Designe</p>
            <p>Responsive Designe</p>
            <p>Web Designe</p>
            <p>Mobile Designe</p>
            </Col>
            <Col>
          <ProgressBarComponent name ="HTML" value="95"/>
          <ProgressBarComponent name ="CSS" value="70"/>
          <ProgressBarComponent name ="JAVASCRIPT" value="92"/>
          <ProgressBarComponent name ="REACT" value="85"/>
          <ProgressBarComponent name ="ANGULAR" value="65"/>
            </Col>
          </Row>
        </Container>
        <br></br>
      </React.Fragment>
    );
  }
}
