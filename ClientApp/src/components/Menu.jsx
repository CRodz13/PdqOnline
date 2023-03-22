import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import foodImg from '../images/food.png'

function GridExample() {
  return (
    <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 14 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={foodImg} />
            <Card.Body className="bg-dark">
              <Card.Title className="card-title">Card title</Card.Title>
              <Card.Text className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample;