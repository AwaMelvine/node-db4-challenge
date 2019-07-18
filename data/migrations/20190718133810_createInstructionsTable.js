
exports.up = function (knex) {
    return knex.schema.createTable('instructions', table => {
        table.increments();
        table.integer('step_number').notNullable();
        table.text('text').notNullable();
        table.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.unique(['recipe_id', 'step_number']);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('instructions');
};
