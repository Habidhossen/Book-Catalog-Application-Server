const bookModel = require("../models/book.model");

// create Book
exports.createBook = async (req, res) => {
  try {
    const data = req.body;
    const bookData = new bookModel(data);
    await bookData.save();
    res.status(201).json({
      status: "success",
      message: "Data inserted successfully",
      data: bookData,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Data not inserted",
      error: error.message,
    });
  }
};

// Get ALL Book
exports.getAllBooks = async (req, res) => {
  try {
    const booksData = await bookModel.find();
    res.status(200).json({
      status: "success",
      data: booksData,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Can't get the data",
      error: error.message,
    });
  }
};

// Get One Book
exports.getOneBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const bookData = await bookModel.findById(bookId);
    res.status(200).json({
      status: "success",
      data: bookData,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Can't get the data",
      error: error.message,
    });
  }
};

// Update Book By ID
exports.updateBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const updatedData = req.body;
    const updatedBook = await bookModel.findByIdAndUpdate(bookId, updatedData, {
      new: true,
    });

    if (!updatedBook) {
      return res.status(404).json({
        status: "fail",
        message: "Book not found",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Book updated successfully",
      data: updatedBook,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Book not updated",
      error: error.message,
    });
  }
};

// Delete Book BY ID
exports.deleteBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    await bookModel.findByIdAndDelete(bookId);
    res.status(200).json({
      status: "success",
      message: "Data deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Can't get the data",
      error: error.message,
    });
  }
};
