import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./CardProt.css";
export default function CardProt(props) {
  return (
    <>
      <Container>
        <Row className="m-2">
          <Col>
            <Card
              style={{ width: "18rem" }}
              className="cardStyle  bg-secondary "
            >
              <h4>{props.name1}</h4>
              <hr></hr>
            </Card>
            <br />
          </Col>
          <Col>
            <Card
              style={{ width: "18rem" }}
              className="cardStyle bg-secondary "
            >
              <h4>{props.name2}</h4>
              <hr></hr>
            </Card>
            <br />
          </Col>
          <Col>
            <Card
              style={{ width: "18rem" }}
              className="cardStyle bg-success "
            >
              <h4>{props.name3}</h4>
              <hr></hr>
            </Card>
            <br />
          </Col>
        </Row>
      </Container>
    </>
  );
}
