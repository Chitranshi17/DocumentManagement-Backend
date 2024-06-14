const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  createDocument,
  getDocuments,
  getDocument,
  deleteDocument,
  updateDocument,
} = require("../controller/documentController");
const uploads = require("../middleware/multer");
const router = express.Router();

router.route("/").get(protect, getDocuments);
router.route("/create").post(protect, uploads.single("photo") , createDocument)


router
  .route("/:id")
  .get(protect, getDocument)
  .delete(protect, deleteDocument)


router.route("/update/:id").put(protect,uploads.single("photo"), updateDocument)
// router.route("/update/:id").put(protect, updateDocument)

module.exports = router;
