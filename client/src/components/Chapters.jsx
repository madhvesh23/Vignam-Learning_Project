import React from "react";
import Card from "react-bootstrap/Card";
import { useAppContext } from "./ContextApi";
import { useNavigate } from "react-router-dom";

function Chapters() {
  const { chapters } = useAppContext();
  const navigate = useNavigate();

  if (!chapters || !Array.isArray(chapters.chapters)) {
    return null; // or display an error message, or loading indicator
  }

  return (
    <>
      <div className="chapters-cards">
        {chapters.chapters.map((chapter) => (
          <Card key={chapter._id} style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{chapter.chapterName}</Card.Title>
            </Card.Body>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Link className="chapters-btn"
              onClick={() =>
                navigate(`/teach/${chapter.chapterName}/${chapter._id}`)
              }
            >
              View More
            </Card.Link>
            {/* <Card.Link href="#">Another Link</Card.Link> */}
          </Card>
        ))}
      </div>
    </>
  );
}

export default Chapters;
