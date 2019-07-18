const db = require('../data/dbConfig');

module.exports = {
    get(id = null) {
        if (id) {
            const recipes = await db("recipes").where({ id }).first();
            return recipes;
        }
        return db("recipes");
    },

};