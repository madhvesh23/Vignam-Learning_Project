const express = require("express");
const Routes = express.Router();
const controller = require("../controller/TeachController");
const upload = require('../middleware/multer')

//get all chapters
Routes.get("/chapters", controller.data);
//post chapter
Routes.post("/addchapter", controller.chapterAdd);
//get chapter
Routes.get("/chapter/", controller.getChapter);
//get chapter using id
Routes.get("/chapter/:chapterId", controller.getIdChapter);
//post adding topic
Routes.post("/topic", controller.addTopic);
//update topic content
Routes.put("/editTopic/:topicId", upload.single("contentPdf"),controller.editTopic);
//get topic
Routes.get("/getTopic/", controller.getTopic);
//get topic using topic id
Routes.get("/getTopic/:id", controller.getTopicById);

Routes.delete("/deleteTopic/:id",controller.deleteTopicById)

Routes.get("/downloadPdf/:name",controller.downloadFile)


module.exports = Routes;




