import Events from "./Components/Events";

import Button from "./Components/Button/Button";
import BlueButton from "./Components/BlueButton/BlueButton";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Container fluid="xl">
      <Row>
        <Col md={6} lg={3}>
          <Events />
        </Col>
        <Col md={6} lg={3}>
          Hammaga Salom!
          <Button />
          <BlueButton />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
