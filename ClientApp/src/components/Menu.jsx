import React, { useState, useEffect } from "react";
import { Button, Card, Container, Col, Row } from "react-bootstrap";
import { data } from "../data/data.js";
import "bootstrap/dist/css/bootstrap.min.css";

function Menu() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    setFoods(data);
  }, []);

  // Filter Type burgers/pizza/etc
  const filterType = (category) => {
    setFoods(
      data.filter((item) => item.category === category)
    );
  };

  // Filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => item.price === price)
    );
  };

  return (
    <Container>
      <Row className="flex flex-col lg:flex-row justify-between">
        {/* Filter Type */}
        <Col>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <Button
              onClick={() => setFoods(data)}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              variant="outline-orange"
            >
              All
            </Button>
            <Button
              onClick={() => filterType("burger")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              variant="outline-orange"
            >
              Burgers
            </Button>
            <Button
              onClick={() => filterType("pizza")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              variant="outline-orange"
            >
              Pizza
            </Button>
            <Button
              onClick={() => filterType("salad")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              variant="outline-orange"
            >
              Salads
            </Button>
            <Button
              onClick={() => filterType("chicken")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              variant="outline-orange"
            >
              Chicken
            </Button>
          </div>
        </Col>

        {/* Filter Price */}
        <Col>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <Button
              onClick={() => filterPrice("$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              variant="outline-orange"
            >
              $
            </Button>
            <Button
              onClick={() => filterPrice("$$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              variant="outline-orange"
            >
              $$
            </Button>
            <Button
              onClick={() => filterPrice("$$$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              variant="outline-orange"
            >
              $$$
            </Button>
            <Button
              onClick={() => filterPrice("$$$$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              variant="outline-orange"
            >
              $$$$
            </Button>
          </div>
        </Col>
      </Row>
      <Row xs={1} md={3} className="g-4 pt-5">
        {foods.map((item, index) => (
          <Col key={index}>
            <Card className="hover-scale " style={{ border: "none" }}>
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
