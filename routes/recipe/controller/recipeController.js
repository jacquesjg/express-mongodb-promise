const Recipe = require("../model/Recipe");

const fetchRecipe = async (req, res) => {
    try {
        let payload = await Recipe.find(req.body);
        res.json({ message: "success", payload })
    } catch (error) {
        res.status(500).json({ message: "failure", error: error.message })
    }
}

// when we fetched the recipe above, how come we didn't have to 

const createRecipe = async (req, res) => {
    try {
        const newRecipe = new Recipe({
            recipe: req.body.recipe,
            price: req.body.price,
        })

        let savedRecipe = await newRecipe.save();
        res.json({ message: "success", payload: savedRecipe })

    } catch (error) {
        res.status(500).json({ message: "failure", error: error.message })
    }
}


module.exports = {
    fetchRecipe,
    createRecipe
};

//using the current application
//PROMISE version- Must use promises
//create a route for recipe /api/recipe
//Basically, it is the same thing what we been doing for animal
//GET, PUT, CREATE, DELETE
//In the schema it should have the following
//recipe - type String, date, price - type Number
//Attach to a new Github repo, and submit link in essay section

