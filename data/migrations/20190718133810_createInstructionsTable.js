
exports.up = function (knex) {
    return knex.schema.createTable('instructions', table => {
        table.increments();
        table.integer('step_number').unique().notNullable();
        table.text('text').notNullable();
        table.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('instructions');
};
