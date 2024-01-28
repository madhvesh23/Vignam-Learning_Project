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
        <svg
        style={{position:"absolute"}}
          width="305"
          height="245"
          viewBox="0 0 305 245"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M149.683 20.8365C174.224 23.9443 197.149 1.857 221.189 7.6794C248.755 14.3559 275.597 30.357 289.899 54.7964C304.633 79.9746 298.77 110.889 298.645 140.043C298.501 173.935 318.125 221.567 289.114 239.205C255.879 259.412 215.867 220.856 177.628 213.62C159.411 210.173 141.906 206.229 123.436 207.853C89.1869 210.866 54.3021 243.759 24.2409 227.113C-2.64086 212.227 -0.942706 170.629 0.925197 140.014C2.60473 112.487 23.2898 91.4001 34.0705 66.0052C45.2553 39.6584 38.769 -1.60551 65.475 -12.0392C94.1219 -23.2313 119.163 16.9716 149.683 20.8365Z"
            fill="#FEC63D"
          />
        </svg>
      <div className="add-video">

        <h3>Your Videos</h3>
        <p style={{ width: 170 }}>
          <strong>Lorem, ipsum dolor sit amet consectetur adipisicing.</strong>
        </p>
        <Button
          variant="primary"
          style={{ color: "black" }}
          onClick={handleShow}
        >
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
