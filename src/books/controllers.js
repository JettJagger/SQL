const Book = require("./model");

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.findAll();
      res.status(200).json({books:books, message: "books found"});
    } catch (error) {    
       res.status(500).json({error: error, errorMessage: errorMessage});
    }
};

const addBook = async (req, res) => {
    try {
       const book = await Book.create({title: req.body.title,
        author: req.body.author,
        genre: req.body.genre});
      res.status(201).json({book: book, message: "book created"});   
    } catch (error) {
      res.status(500).json({error: error, errorMessage: errorMessage});
    }
   
};

const updateAuthor = async (req, res) => {
    const bookId = req.params.id;
    const { author } = req.body;

    try {
        const book = await Book.findByPk(bookId);

        if (!book) {
            res.status(404).json({ message: "Book not found" });
            return;
        }

        book.author = author;
        await book.save();

        res.status(200).json({ message: "Author updated successfully", book });
    } catch (error) {
        console.error("Error updating author:", error);
        res.status(500).json({ message: "Error updating author" });
    }
};

const deleteBook = async (req, res) => {
    const bookId = req.params.id;

    try {
        const book = await Book.findByPk(bookId);

        if (!book) {
            res.status(404).json({ message: "Book not found" });
            return;
        }

        await book.destroy();

        res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
        console.error("Error deleting book:", error);
        res.status(500).json({ message: "Error deleting book" });
    }
};

const findBookByTitle = async (req, res) => {
    const titleToFind = req.query.title;

    try {
        const books = await Book.findAll({
            where: {
                title: titleToFind,
            },
        });

        if (books.length === 0) {
            res.status(404).json({ message: "No books found with the given title" });
            return;
        }

        res.status(200).json(books);
    } catch (error) {
        console.error("Error finding books by title:", error);
        res.status(500).json({ message: "Error finding books by title" });
    }
};

const deleteAllEntries = async (req, res) => {
    try {
        await Book.destroy({
            where: {},
            truncate: true,
        });

        res.status(200).json({ message: "All entries deleted successfully" });
    } catch (error) {
        console.error("Error deleting all entries:", error);
        res.status(500).json({ message: "Error deleting all entries" });
    }
};



module.exports = {
    getAllBooks: getAllBooks,
    addBook: addBook,
    updateAuthor: updateAuthor,
    deleteBook: deleteBook,
    findBookByTitle: findBookByTitle,
    deleteAllEntries: deleteAllEntries
};