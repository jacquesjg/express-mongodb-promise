const express = require("express");
const router = express.Router();

const { fetchRecipe, createRecipe } = require("./controller/recipeController");

/* GET home page. */
router.get("/", fetchRecipe);
router.post("/create-recipe", createRecipe);


module.exports = router;

//using the current application
//PROMISE version- Must use promises
//create a route for recipe /api/recipe
//Basically, it is the same thing what we been doing for animal
//GET, PUT, CREATE, DELETE
//In the schema it should have the following
//recipe - type String, date, price - type Number
//Attach to a new Github repo, and submit link in essay section

