import React, { useState } from "react";
import TopicContent from "./TopicContent";
import Youtube from "./Youtube";
import Header from "./Header";
import WhiteBoard from "./WhiteBoard";
import { SlNote } from "react-icons/sl";
import { RiDeleteBin6Line } from "react-icons/ri";
import Modal from "./AddContentModal";
import axios from "axios";
import api from "../API"
function Topics({ chapter, chapter_id }) {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [topicDetails, setTopicDetails] = useState({});
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setTopicDetails("");
  };
  const handleTopicChange = (event) => {
    setSelectedTopic(event.target.value);
  };
  const fetchTopic = async (selectedTopic) => {
    try {
      const topicData = await axios.get(
        `${api}/getTopic/${selectedTopic}`
      );
      setTopicDetails(topicData.data);
    } catch (error) {
      console.error("Error fetching Topics:", error);
    }
  };
  const deleteTopic = async (selectedTopic) => {
    try {
      const topicData = await axios.delete(
        `${api}/deleteTopic/${selectedTopic}`
      );
      console.log("topic deleted");
    } catch (error) {
      console.error("Error deleting topic:", error);
    }
  };

  console.log(selectedTopic);
  const isTopicSelected = selectedTopic !== "";
  const selectedTopicObject =
    Array.isArray(chapter.topics) &&
    chapter.topics.find((topic) => topic._id === selectedTopic);

  return (
    <div className="main-container">
      <Header head={chapter.chapterName} />
      <Youtube url={chapter.youtubeUrl} />

      <div className="lower">
        <div className="dropdown">
          <div className="dropdown-head">
            <div className="topicarr-head-left">
              <select
                id="topicsDropdown"
                value={selectedTopic}
                onChange={handleTopicChange}
              >
                <option value="" disabled>
                  Topics
                </option>
                {Array.isArray(chapter.topics) &&
                  chapter.topics.map((topic) => (
                    <option key={topic._id} value={topic._id}>
                      {topic.topicName}
                    </option>
                  ))}
              </select>
              {/* {topicDetails && } */}
              <div
                className={`topic-edit ${isTopicSelected ? "" : "disabled"}`}
              >
                <SlNote
                  style={{ fontSize: 16, cursor: "pointer", marginLeft: 5 }}
                  onClick={() => {
                    fetchTopic(selectedTopic);
                    openModal();
                  }}
                />
                <RiDeleteBin6Line
                  style={{ fontSize: 17, cursor: "pointer", marginLeft: 8 }}
                  onClick={() => deleteTopic(selectedTopic)}
                />
              </div>
            </div>
            <button onClick={openModal}>+ Add Content</button>
            {isModalOpen && (
              <Modal
                chapterId={chapter_id}
                chapter={chapter}
                onClose={closeModal}
                topicDetails={topicDetails}
              />
            )}
          </div>
          {!selectedTopic ? (
            <p className="begin-topic">Please select a topic</p>
          ) : (
            <TopicContent selectedTopicObject={selectedTopicObject} />
          )}
        </div>
        <WhiteBoard />
      </div>
    </div>
  );
}

export default Topics;
