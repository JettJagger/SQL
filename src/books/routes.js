const { Router } = require("express");
const bookRouter = Router(); 

const Book = require("./model");

const {getAllBooks} = require("./controllers");

//add book to the data base 
bookRouter.post("/addbook", async (req, res) => {
    const book = await Book.create({
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre
    });
     
    const successResponse = {
        book: book,
        message: "book created",
    };

    res.status(201).json(successResponse);
});

//get all books from the database
bookRouter.get("/getAllBooks", getAllBooks);

//update a books author
bookRouter.put("/updateAuthor/:id", async (req, res) => {
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
});


//delete a book 
bookRouter.delete("/deleteBook/:id", async (req, res) => {
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
});

//find a book by its title 
bookRouter.get("/findBookByTitle", async (req, res) => {
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
});

//deletes all books from the database
bookRouter.delete("/deleteAllEntries", async (req, res) => {
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
});


module.exports = bookRouter;