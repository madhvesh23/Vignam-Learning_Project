const { Topic, Teach, Chapter } = require("../model/Schema");
const path = require("path");

exports.data = async (req, res) => {
  try {
    const teachData = await Teach.findOne().populate({
      path: "chapters",
    });
        res.send(teachData);
  } catch (error) {
      }
};

exports.chapterAdd = async (req, res) => {
  try {
    const { chapterName, youtubeUrl, topics } = req.body;
    const chapter = await Chapter.create({
      chapterName,
      youtubeUrl,
      topics,
    });

    const teach = await Teach.findOne();
    teach.chapters.push(chapter._id);
    await teach.save();
    res.status(201).json(chapter);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.addTopic = async (req, res) => {
  try {
    const { chapterId, topicName, content, contentPdf } = req.body;
        // Create the topic
    const topic = await Topic.create({
      topicName,
      content,
      contentPdf,
    });
    const chapter = await Chapter.findById(chapterId);
    if (!chapter) {
      return res.status(404).json({ error: "Chapter not found" });
    }
    chapter.topics.push(topic._id);
    await chapter.save();
    res.send(topic);
  } catch (error) {
      }
};

exports.editTopic = async (req, res) => {
  try {
    const { topicId } = req.params;
    const { content } = req.body;
    let contentPdfArray = [];

    try {
      const existingTopic = await Topic.findById(topicId);

    
      if (
        existingTopic &&
        existingTopic.contentPdf &&
        Array.isArray(existingTopic.contentPdf)
      ) {
        contentPdfArray = [...existingTopic.contentPdf];
      }

      if (req.file && req.file.path) {
    
        const fileName = path.basename(req.file.path);
        contentPdfArray.push(fileName);
      }


      const updatedTopicData = {
        content: content || existingTopic.content,
        contentPdf: contentPdfArray || "",
      };

      const updatedTopic = await Topic.findByIdAndUpdate(
        topicId,
        updatedTopicData,
        { new: true }
      );

      if (!updatedTopic) {
        return res.status(404).json({ error: "Topic not found" });
      }

      res.status(200).json({ message: "Topic updated successfully" });
    } catch (updateError) {
      console.error("Error updating topic:", updateError);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } catch (error) {
    console.error("Error in editing topic:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getChapter = async (req, res) => {
  try {
    const { chapterId } = req.params;
    const chapter = await Chapter.find().populate("topics");
    if (!chapter) {
      return res.status(404).json({ error: "Chapter not found" });
    }
    res.json(chapter);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
exports.getIdChapter = async (req, res) => {
  try {
    const { chapterId } = req.params;
    const chapter = await Chapter.findById(chapterId).populate("topics");
    if (!chapter) {
      return res.status(404).json({ error: "Chapter not found" });
    }
    res.json(chapter);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getTopic = async (req, res) => {
  try {
    const topic = await Topic.find();

    if (!topic) {
      return res.status(404).json({ error: "Topic not found" });
    }
    res.json(topic);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getTopicById = async (req, res) => {
  try {
    const { id } = req.params;
        const topic = await Topic.findById(id);
    if (!topic) {
      return res.status(404).json({ error: "Topic not found" });
    }
        res.json(topic);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deleteTopicById = async (req, res) => {
  try {
    const { id } = req.params;

    const existingTopic = await Topic.findById(id);
    if (!existingTopic) {
      return res.status(404).json({ error: "Topic not found" });
    }
    // Delete the topic
    await Topic.findByIdAndDelete(id);
    res.status(200).json({ message: "Topic deleted successfully" });
  } catch (error) {
    console.error("Error deleting topic:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.downloadFile = async (req, res) => {
  try {
    const { name } = req.params;

  
    if (!name) {
      return res.status(400).json({ error: 'Invalid filename' });
    }
    const decodedFilename = decodeURIComponent(name);
   
    const filePath = path.join(
      __dirname,
      '../middleware/uploads/',
      decodedFilename
    );

    // Download reesponsee
    res.download(filePath);
  } catch (error) {
    console.error('Error downloading file:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};