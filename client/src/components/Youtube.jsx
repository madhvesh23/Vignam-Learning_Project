import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";

function Youtube({ url }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="youtube-container">
      <div className="add-video">
        <h3>Your Videos</h3>
        <p style={{ width: 170 }}>
          <strong>Lorem, ipsum dolor sit amet consectetur adipisicing.</strong>
        </p>
        <Button variant="primary" style={{color:"black"}} onClick={handleShow}>
          Add video
        </Button>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Enter Youtube Url</Modal.Title>
          </Modal.Header>
          <Modal.Body placeholder="enter"></Modal.Body>
          <Modal.Footer>
            <div className="modal-final modal-content-btn">
              <button onClick={handleClose}>Close</button>
              <button>Save</button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
      {/* <TbSquareRoundedArrowLeft
        style={{
          fontSize: 28,
          cursor: "pointer",
          borderRadius: 50,
        }}
      /> */}
      <div className="right-video">
        <Carousel interval={1000}>
          <Carousel.Item>
            <Carousel.Caption>
              <iframe
                style={{ borderRadius: 8 }}
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
              ></iframe>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <iframe
                style={{ borderRadius: 8 }}
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
              ></iframe>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <iframe
                style={{ borderRadius: 8 }}
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
              ></iframe>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* <TbSquareRoundedArrowRight
        style={{
          fontSize: 28,
          cursor: "pointer",
          borderRadius: 50,
        }}
      /> */}
    </div>
  );
}

export default Youtube;
