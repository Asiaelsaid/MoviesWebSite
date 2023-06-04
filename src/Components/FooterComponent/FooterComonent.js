import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './FooterComponent.css';
import Button from 'react-bootstrap/Button';
export default class FooterComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
       <Container className="bg-dark text-light ">
      <Row>
        <Col className="mt-3" >GET IN TECH</Col>
        <Col>  <Button variant="outline-light" className="mt-3" >Contact Me</Button></Col>
        <Col className="mt-3" >010000567</Col>
      
      </Row>
    </Container>
      </React.Fragment>
    );
  }
}