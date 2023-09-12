const express = require("express");
const {
  createBook,
  getAllBooks,
  getOneBook,
  deleteBook,
  updateBook,
} = require("../controllers/book.controller");
const router = express.Router();

router.post("/book", createBook);
router.get("/book", getAllBooks);
router.get("/book/:id", getOneBook);
router.delete("/book/:id", deleteBook);
router.patch("/book/:id", updateBook);

module.exports = router;
