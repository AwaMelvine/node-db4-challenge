const { Router } = require('express');
const Recipe = require('../models/Recipe');
const router = new Router();

router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.getRecipes();
        res.status(200).json({ data: recipes });
    } catch (error) {
        res.status(500).json({ error: "Oops... there was a server error" });
    }
});


module.exports = router;
