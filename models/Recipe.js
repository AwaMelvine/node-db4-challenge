const db = require('../data/dbConfig');

module.exports = {
    getRecipes() {
        return db("recipes");
    },

    async getShoppingList(recipe_id) {
        const query = await db.select('ingredients.id', 'ingredients.name', 'ingredients.quantity')
            .from('ingredients')
            .innerJoin('recipe_ingredient', 'recipe_ingredient.ingredient_id', 'ingredients.id')
            .innerJoin('recipes', 'recipe_ingredient.recipe_id', 'recipes.id')
            .where('recipe_ingredient.recipe_id', recipe_id);
        return query;
    },

    async findById(id = null) {
        const recipes = await db("recipes").where({ id }).first();
        return recipes;
    },

    async add(recipe) {
        const [id] = await db("recipes").insert(recipe);
        return this.findById(id);
    },

    async update(changes, id) {
        const count = await db('recipes').where('id', id).update(changes);
        return (count > 0 ? this.findById(id) : null);
    },

    async remove(id) {
        const count = await db('recipes').where('id', id).del();
        return count;
    }



};