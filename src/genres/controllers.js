const Genre = require("./model");

const addGenre = async (req, res) => {
    try {
      const genre = await Genre.create({
            genre: req.body.genre,
        });
        res.status(201).json({genre:genre, message: "successfully added genre"});
    } catch (error) {
        res.status(500).json({error:error, errorMessage: error.message});
    }
};

const getGenre = async (req, res) => {
    try {
        const genre = await Genre.findAll();
      res.status(200).json({genre:genre, message: "genre found"});
    } catch (error) {    
       res.status(500).json({error: error, errorMessage: error.message});
    }
};

module.exports = {
    addGenre,
    getGenre,
};