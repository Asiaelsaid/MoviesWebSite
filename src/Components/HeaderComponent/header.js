import React from "react";
import "./header.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class HeaderComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container className="imgBackGround">
          <Row>
            <Col>
              <h1 className="mainName">Asia Magdi </h1>
              <h3 className="secondName">Web Developer & Designer </h3>

              <Button variant="outline-light" className="but">
                Contact Me
              </Button>
            </Col>
          </Row>
        </Container>
        <br></br>
      </React.Fragment>
    );
  }
}
