import React from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";

function TopicContent({ selectedTopicObject }) {
  console.log(selectedTopicObject);
  const handleButtonClick = async (pdfFileName) => {
    try {
      console.log("111");
      const res = await axios.get(
        `http://localhost:5000/downloadPdf/${pdfFileName}`,
        { responseType: "blob" }
      );
      console.log("222");
      const blob = new Blob([res.data], { type: res.data.type });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "file.pdf";
      // link.download = res.headers["content-disposition"].split("filename=")[1];
      link.click();
      console.log("333");
    } catch (error) {
      console.error("Error downloading Pdf:", error);
    }
  };
  const truncateFileName = (fileName, maxLength) => {
    return fileName.length > maxLength
      ? fileName.substring(0, maxLength) + "...pdf"
      : fileName;
  };
  const hardCodedImageUrl =
    "https://www.pcworld.com/wp-content/uploads/2024/01/pdf-icon-5.jpg?quality=50&strip=all";

  const itemsPerSlide = 3; // Number of items to display per slide

  // Function to chunk the array into smaller arrays
  const chunkArray = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );

  // Chunk the contentPdf array into groups of itemsPerSlide
  const chunkedItems = chunkArray(
    selectedTopicObject.contentPdf,
    itemsPerSlide
  );
  return (
    <>
      {selectedTopicObject && (
        <div className="topic-container">
          <div className="pdf">
            <Carousel slide={false}>
              {chunkedItems.map((chunk, chunkIndex) => (
                <Carousel.Item key={chunkIndex}>
                  <Carousel.Caption>
                    <div className="row">
                      {chunk.map((filename, index) => (
                        <div
                          key={index}
                          className="col-md-4 pdf-card"
                          onClick={() => handleButtonClick(filename)}
                        >
                          <img
                            src={hardCodedImageUrl}
                            alt="Hard-coded Image"
                            style={{
                              width: "100%",
                              height: "auto",
                              borderRadius: 8,
                            }}
                          />
                          <p style={{ margin: 0 }}>{truncateFileName(filename,7)}</p>
                        </div>
                      ))}
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
            {/* <div> */}
            {/* {selectedTopicObject.contentPdf.map((filename, index) => (
                <div
                  key={index}
                  className="pdf-card"
                  onClick={() => handleButtonClick(filename)}
                >
                  <img
                    src={hardCodedImageUrl}
                    alt="Hard-coded Image"
                    style={{ width: "100%", height: "auto", borderRadius: 8 }}
                  />
                  <p style={{ margin: 0 }}>{filename}</p>
                </div>
              ))} */}
            {/* </div> */}
          </div>
          <p className="content">{selectedTopicObject.content}</p>
        </div>
      )}
    </>
  );
}

export default TopicContent;
