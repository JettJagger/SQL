const { Router } = require("express");
const authorRouter = Router(); 

const {addAuthor, getAuthor} = require("./controllers");



authorRouter.post("/addAuthor", addAuthor);

authorRouter.get("/getAuthor", getAuthor);



module.exports = authorRouter;