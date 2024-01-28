const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema({
  topicName: {
    type: String,
  },
  content: {
    type: String,
  },
  contentPdf: {
    type: [String],
  },
});

const Topic = mongoose.model("Topic", topicSchema);

const chapterSchema = new mongoose.Schema({
  chapterName: {
    type: String,
  },
  youtubeUrl: {
    type: String,
  },
  topics: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Topic",
    },
  ],
});

const Chapter = mongoose.model("Chapter", chapterSchema);

const teachSchema = new mongoose.Schema({
  chapters: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chapter",
    },
  ],
});

const Teach = mongoose.model("Teach", teachSchema);

module.exports = { Topic, Chapter, Teach };
