const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
    {
        recipe: {
            type: String,
        },
        price: {
            type: Number,
        },
    },
    {
        timestamps: true,
    },
)

module.exports = mongoose.model("recipe", recipeSchema);

//using the current application
//PROMISE version- Must use promises
//create a route for recipe /api/recipe
//Basically, it is the same thing what we been doing for animal
//GET, PUT, CREATE, DELETE
//In the schema it should have the following
//recipe - type String, date, price - type Number
//Attach to a new Github repo, and submit link in essay section