import React, { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';

const FoodModal = () => {
  const [show, setShow] = useState(true);
  const [zipCode, setZipCode] = useState('');
  const [storeLocation, setStoreLocation] = useState('');
  const [showMenu, setShowMenu] = useState(false);

  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
  };

  const handleLocationChange = (event) => {
    setStoreLocation(event.target.value);
    setShowMenu(true);
  };

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      <Modal className="" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="">Enter Zip Code</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark">
          <Form.Group controlId="formZipCode">
            <Form.Label className="text-">Zip Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter zip code"
              value={zipCode}
              onChange={handleZipCodeChange}
            />
          </Form.Group>
          {zipCode && (
            <>
              <Form.Group controlId="formLocation">
                <Form.Label>Select Store Location</Form.Label>
                <Form.Control as="select" onChange={handleLocationChange}>
                  <option>Select location</option>
                  <option value="location1">Location 1</option>
                  <option value="location2">Location 2</option>
                  <option value="location3">Location 3</option>
                </Form.Control>
              </Form.Group>
              {showMenu ? (
                <>
                  <h3>Menu for {storeLocation}</h3>
                  <p>Food Card 1</p>
                  <p>Food Card 2</p>
                  <p>Food Card 3</p>
                </>
              ) : (
                <>
                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <div className="card">
                        <div className="card-body">Placeholder</div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="card">
                        <div className="card-body">Placeholder</div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="card">
                        <div className="card-body">Placeholder</div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <div className="card">
                        <div className="card-body">Placeholder</div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="card">
                        <div className="card-body">Placeholder</div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="card">
                        <div className="card-body">Placeholder</div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FoodModal;
