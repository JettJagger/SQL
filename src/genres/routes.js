const {Router} = require("express");
const genreRouter = Router();

const {addGenre, getGenre} = require("./controllers");

genreRouter.post("/addgenre", addGenre);

genreRouter.get("/getGenre", getGenre);


module.exports = genreRouter;