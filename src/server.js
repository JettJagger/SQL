require("dotenv").config();
const express = require("express");

const Book = require("./books/model");
const Genre = require("./genres/model");
const Authors = require ("./authors/model");

const bookRouter = require("./books/routes");
const genreRouter = require("./genres/routes");
const authorRouter = require("./authors/routes");

const port = process.env.PORT || 5001;

const app = express ();

app.use(express.json());

app.use("/books", bookRouter);
app.use("/genres", genreRouter);
app.use("/authors", authorRouter);


const syncTables = () => {
    Genre.hasMany(Book);
    Book.belongsTo(Genre); 

    Authors.hasMany(Book);
    Book.belongsTo(Authors);
    
    
    Book.sync();
    Genre.sync();
    Authors.sync();

    
};





//http://localhost/health
app.get("/health", (req,res) => {
    res.status(200).json({message: "API is healthy"});
});

app.listen(port, () => {
    syncTables();
    console.log(`App is listening on port ${port}`);
});