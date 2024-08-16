const express = require("express");
const router = express.Router();
const newsController = require("../app/controllers/NewsController");

//Neu co dau : truoc slug thi ghi gi cx dc or
//Khong co dau : thi phai ghi dung path, neu sai thi no tra ve / dau tien
//De path / cuoi cung de may cai kia match trc

router.use("/:slug", newsController.show);
router.use("/", newsController.index);

module.exports = router;
