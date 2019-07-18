
exports.up = function (knex) {
    return knex.schema.createTable("ingredients", table => {
        table.increments();
        table.text('name', 128)
            .unique()
            .notNullable();
        table.float('quantity');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('ingredients');
};
