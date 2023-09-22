const { Router } = require("express");
const authorRouter = Router(); 

authorRouter.post("/addAuthor", addAuthor);

authorRouter.get("/getAuthor", getAuthor);



module.exports = authorRouter;