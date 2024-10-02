const express = require("express");
const router = express.Router();
const courseController = require("../app/controllers/CourseController");

//Neu co dau : truoc slug thi ghi gi cx dc or
//Khong co dau : thi phai ghi dung path, neu sai thi no tra ve / dau tien
//De path / cuoi cung de may cai kia match trc

router.get("/create", courseController.create);
router.post("/store", courseController.store);
router.get("/:id/edit", courseController.edit);
router.post("/handle-actions-forms", courseController.handleActionsForms)
router.post("/handles-trash-actions-forms", courseController.handleTrashActionsForm)

router.put("/:id", courseController.update);
router.patch("/:id/restore", courseController.restore);
router.delete("/:id/force", courseController.forceDestroy);
router.delete("/:id", courseController.delete);


router.get("/:slug", courseController.show);

module.exports = router;
