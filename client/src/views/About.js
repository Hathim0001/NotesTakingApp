import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
  return (
    <Row className="mt-5" style={{ marginRight: 0 }}>
      <Col className="text-center">
        <Button variant="info" href="https://github.com/kitan23" size="lg">
          Visit my Github repo for more AWESOME projects
        </Button>
      </Col>
    </Row>
  );
};

export default About;
