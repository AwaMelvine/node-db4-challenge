
exports.up = function (knex) {
    return knex.schema.createTable('recipe_ingredient', table => {
        table.increments();
        table.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('recipe_ingredient');
};
