import React, { useState, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { CiText } from "react-icons/ci";
import { FaFilePdf } from "react-icons/fa6";
import axios from "axios";

function AddContentModal({ onClose, chapter, topicDetails }) {
  const fileInputRef = useRef(null);
  const [selectedTopic, setSelectedTopic] = useState({ id: "", name: "" });
  const [contentModal, setContentModal] = useState(false);
  const [storeContent, setStoreContent] = useState();
  const [file, setFile] = useState(null);
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    } else {
      setFile(null); 
    }
  };
  const openFileInput = () => {
    // Trigger click on the file input when the button is clicked
    fileInputRef.current.click();
  };
  const handleTopicChange = (event) => {
    const selectedTopicId = event.target.value;
    const selectedTopicName =
      event.target.options[event.target.selectedIndex].text;
      console.log(selectedTopicName)
    setSelectedTopic({ id: selectedTopicId, name: selectedTopicName });
  };
  console.log(selectedTopic);
  const submitContent = (e) => {
    e.preventDefault();
    showContentModal();
    setStoreContent(storeContent);
  };
  const showContentModal = () => {
    setContentModal(!contentModal);
    setStoreContent(topicDetails.content);
  };
  console.log(storeContent);
  const sendContent = async (selectedTopic) => {
    try {
      const formData = new FormData();
      formData.append("topicName", selectedTopic.name);
      formData.append("content", storeContent);
      if(file){
        formData.append("contentPdf", file);
      }

      console.log(formData);

      console.log("made request for change");
      console.log(selectedTopic);
      // await axios.put(
      //   `http://localhost:5000/editTopic/${selectedTopic.id}`,
      //   formData
      // );
      console.log("data edit");
    } catch (error) {
      console.error("Error fetching chapters:", error);
    }
  };

  const sendContent1 = async (selectedTopic) => {
    try {
      const formData = new FormData();
      formData.append("topicName", selectedTopic.name);
      formData.append("content", storeContent);
      if(file){
        formData.append("contentPdf", file);
      }

      console.log(formData);

      console.log("made request for change");
      console.log(selectedTopic);
      await axios.put(
        `http://localhost:5000/editTopic/${selectedTopic}`,
        formData
      );
      console.log("data edit");
    } catch (error) {
      console.error("Error fetching chapters:", error);
    }
  };
  const isTopicSelected = selectedTopic.id !== "";

  return (
    <>
      <div className="modal-overlay">
        <div className="modal-content">
          <div className="modal-head">
            {topicDetails ? (
              <h5 style={{ marginTop: 4 }}>Edit Content</h5>
            ) : (
              <h5 style={{ marginTop: 4 }}>Add Content</h5>
            )}
            <IoMdClose
              onClick={onClose}
              className="modal-close"
              style={{ fontSize: 32, cursor: "pointer" }}
            />
          </div>
          {topicDetails ? (
            <h5 style={{ textAlign: "center", color: "#000000ba" }}>
              <h6 style={{ textDecoration: "underline" }}>Topic</h6>{" "}
              {topicDetails.topicName}
            </h5>
          ) : (
            <div className="modal-dropdown">
              <h6 style={{ color: "#000000ba" }}>Topic Name</h6>
              <select
                id="topicsDropdown"
                value={selectedTopic.id}
                onChange={handleTopicChange}
              >
                <option value="" disabled>
                  Topic Name
                </option>
                {Array.isArray(chapter.topics) &&
                  chapter.topics.map((topic) => (
                    <option key={topic._id} value={topic._id}>
                      {topic.topicName}
                    </option>
                  ))}
              </select>
            </div>
          )}

          <div
            className={`modal-main ${
              isTopicSelected || topicDetails.topicName ? "" : "disabled"
            }`}
          >
            <p
              tabIndex="0"
              disabled={!isTopicSelected}
              onClick={showContentModal}
            >
              <div>
                <CiText style={{ fontSize: 20 }} />
              </div>
              {topicDetails
                ? "Edit your personalized content."
                : "Type your own personalized content."}
            </p>
            <p
              onClick={() => openFileInput()}
              tabIndex="0"
              disabled={!isTopicSelected}
            >
              <div>
                <FaFilePdf style={{ fontSize: 20 }} />
              </div>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              {file ? file.name :"Type your own personalized content."}
            </p>
          </div>
          <div className="modal-final">
            <button onClick={onClose}>Cancel</button>
            {topicDetails ? (
              <button
                className={`${
                  isTopicSelected || topicDetails ? "" : "disabled"
                }`}
                onClick={() => {
                  sendContent1(topicDetails._id);
                  onClose();
                }}
              >
                Update Topic
              </button>
            ) : (
              <button
                className={`${
                  isTopicSelected || topicDetails ? "" : "disabled"
                }`}
                onClick={() => {
                  sendContent(selectedTopic);
                  onClose();
                }}
              >
                + Add Content
              </button>
            )}
          </div>
        </div>
      </div>

      {/* content Modal */}
      {contentModal && (
        <div className="modal-overlay modal-overlay-content">
          <div className="modal-content">
            <h5 style={{ textAlign: "center" }}>Add Content here</h5>
            <form>
              <textarea
                name="content"
                value={storeContent}
                onChange={(e) => setStoreContent(e.target.value)}
                placeholder="Write your topic content"
                rows={15}
                cols="700px"
                style={{ borderRadius: 10, width: "100%" }}
              />
            </form>
            <div className="modal-final modal-content-btn">
              <button onClick={showContentModal}>Close</button>
              <button onClick={submitContent}>Save</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AddContentModal;
