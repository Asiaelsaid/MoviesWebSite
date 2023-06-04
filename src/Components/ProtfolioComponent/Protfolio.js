import React from "react";
import CardProt from '../CardProtfolio/CardProt';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './protfolio.css'
export default class Protfolio extends React.Component {
  render() {
    return (
      <>
       <Container>
        
      <Row>
        <Col>
        <h2 className="mainProt2">Protfolio</h2>
        <CardProt name1="UI/UX Designe"  name2="Responsive Designe" name3="Web Designe" />
        
        <CardProt name1="Mobile Designe" name2="Web Application Development" name3="Mobile Application Development"/>
       
    
        </Col>
      </Row>
    </Container>
     
      </>
    );
  }
}
