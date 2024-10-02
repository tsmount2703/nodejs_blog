const express = require("express");
const router = express.Router();
const meController = require("../app/controllers/MeController");

//Neu co dau : truoc slug thi ghi gi cx dc or
//Khong co dau : thi phai ghi dung path, neu sai thi no tra ve / dau tien
//De path / cuoi cung de may cai kia match trc

router.get("/stored/courses", meController.storedCourses);
router.get("/trash/courses", meController.trashCourses);


module.exports = router;

