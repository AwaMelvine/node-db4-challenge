const db = require('../data/dbConfig');

module.exports = {
    get(id = null) {
        if (id) {
            const recipes = await db("recipes").where({ id }).first();
            return recipes;
        }
        return db("recipes");
    },

    async add(recipe) {
        const [id] = await db("recipes").insert(recipe);
        return this.get(id);
    },

    async update(changes, id) {
        const count = await db('recipes').where('id', id).update(changes);
        return (count > 0 ? this.get(id) : null);
    },

    async remove(id) {
        const count = await db('recipes').where('id', id).del();
        return count;
    }



};