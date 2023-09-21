const { Router } = require("express");
const bookRouter = Router(); 

const Book = require("./model");

const {getAllBooks, updateAuthor, deleteBook, findBookByTitle, deleteAllEntries} = require("./controllers");

//add book to the data base 
bookRouter.post("/addbook", addBook);

//get all books from the database
bookRouter.get("/getAllBooks", getAllBooks);

//update a books author
bookRouter.put("/updateAuthor/:id", updateAuthor);


//delete a book 
bookRouter.delete("/deleteBook/:id", deleteBook);

//find a book by its title 
bookRouter.get("/findBookByTitle", findBookByTitle);

//deletes all books from the database
bookRouter.delete("/deleteAllEntries", deleteAllEntries);


module.exports = bookRouter;