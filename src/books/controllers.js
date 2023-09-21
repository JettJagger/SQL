const Book = require("./model");

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.findAll();
      res.status(200).json({books:books, message: "books found"});
    } catch (error) {
       const errorResponse = {
        error: error,
        errorMessage: error.message,
       };

       res.status(500).json({error: error, errorMessage: errorMessage});
    }
};



module.exports = {
    getAllBooks: getAllBooks
}