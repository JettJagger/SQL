require("dotenv").config();
const express = require("express");

const Book = require("./books/model");
const Genre = require("./genres/model");

const bookRouter = require("./books/routes");

const port = process.env.PORT || 5001;

const app = express ();

app.use(express.json());

app.use("./books", bookRouter);


const syncTables = () => {
    Book.sync();
    Genre.sync();
};





//http://localhost/health
app.get("/health", (req,res) => {
    res.status(200).json({message: "API is healthy"});
});

app.listen(port, () => {
    syncTables();
    console.log(`App is listening on port ${port}`);
});