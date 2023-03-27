import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { data } from "../data/data.js";

function Menu() {
  const [foods, setFoods] = useState([]);
  const [showCards, setShowCards] = useState(true);

  useEffect(() => {
    setFoods(data);
  }, []);

  // Filter Type burgers/pizza/etc
  const filterType = (category) => {
    setShowCards(false);
    setTimeout(() => {
      setFoods(data.filter((item) => item.category === category));
      setShowCards(true);
    }, 500); // wait for the fade-out transition to complete before updating the data and triggering the fade-in transition
  };

  // Filter by price
  const filterPrice = (price) => {
    setShowCards(false);
    setTimeout(() => {
      setFoods(data.filter((item) => item.price === price));
      setShowCards(true);
    }, 500); // wait for the fade-out transition to complete before updating the data and triggering the fade-in transition
  };

  return (
    <Container>
      <Row className="mt-4">
        {/* Filter Type */}
        <Col md={6} lg={6}>
          <p className="label-text">Filter Type</p>
          <div className="">
            <Button
              onClick={() => setFoods(data)}
              className="btn-color mx-2"
              variant=""
            >
              All
            </Button>
            <Button
              onClick={() => filterType("burger")}
              className="btn-color mx-2"
              variant=""
            >
              Burgers
            </Button>
            <Button
              onClick={() => filterType("pizza")}
              className="btn-color mx-2"
              variant=""
            >
              Pizza
            </Button>
            <Button
              onClick={() => filterType("salad")}
              className="btn-color mx-2"
              variant=""
            >
              Salads
            </Button>
            <Button
              onClick={() => filterType("chicken")}
              className="btn-color mx-2"
              variant=""
            >
              Chicken
            </Button>
          </div>
        </Col>

        {/* Filter Price */}
        <Col md={6} lg={6}>
          <p className="label-text">Filter Price</p>
          <div className="">
            <Button
              onClick={() => filterPrice("$")}
              className="btn-color mx-2"
              variant=""
            >
              $
            </Button>
            <Button
              onClick={() => filterPrice("$$")}
              className="btn-color mx-2"
              variant=""
            >
              $$
            </Button>
            <Button
              onClick={() => filterPrice("$$$")}
              className="btn-color mx-2"
              variant=""
            >
              $$$
            </Button>
            <Button
              onClick={() => filterPrice("$$$$")}
              className="btn-color mx-2"
              variant=""
            >
              $$$$
            </Button>
          </div>
        </Col>
      </Row>

      <Row xs={1} md={3} className="g-4 pt-5">
        {foods.map((item, index) => (
          <Col key={index}>
            <Card
              className="hover-scale"
              style={{ border: "none", transition: "opacity 1s ease-in", opacity: showCards ? "1" : "0" }}
            >
              <Card.Img
                variant="top"
                src={item.image}
                alt={item.name}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <Card.Body className="bg-dark">
                <Card.Title className="card-title">{item.name}</Card.Title>
                <Card.Text className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Menu;
