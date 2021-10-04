var express = require("express");
var router = express.Router();
const { getAllTodo, createTodo } = require("./controller/todoController");

/* GET home page. */
router.get("/", function (req, res, next) {
    getAllTodo({})
        .then((payload) => {
            res.json({ message: "success", payload });
        })
        .catch((error) => {
            res.status(500).json({ message: "failure", error: error.message });
        });
});

module.exports = router;


//using the current application
//PROMISE version- Must use promises
//create a route for recipe /api/recipe
//Basically, it is the same thing what we been doing for animal
//GET, PUT, CREATE, DELETE
//In the schema it should have the following
//recipe - type String, date, price - type Number
//Attach to a new Github repo, and submit link in essay section