const Authors = require("./model");
const Genre = require("../genres/model");
const Books = require("../books/model");

const addAuthor = async (req, res) => {
    try {
        const author = await Authors.create({
            author: req.body.author,
        });
        res.status(201).json({author:author, message: "successfully added author"});
    } catch (error) {
        res.status(500).json({error: error, errorMessage: errorMessage});
    }
}

const getAuthor = async (req, res) => {
    try {
        const author = await Authors.findAll();
      res.status(200).json({author:author, message: "author found"});
    } catch (error) {    
       res.status(500).json({error: error, errorMessage: errorMessage});
    }
};

module.exports ={
    addAuthor: addAuthor,
    getAuthor: getAuthor,

};