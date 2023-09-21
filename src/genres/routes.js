const {Router} = require("express");
const genreRouter = Router();

const {addGenre} = require("./controllers");

genreRouter.post("/addgenre", addGenre);


module.exports = genreRouter;