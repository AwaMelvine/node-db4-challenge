
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { id: 1, name: 'rice', quantity: 2.3 },
        { id: 2, name: 'garri', quantity: 2.5 },
        { id: 3, name: 'yam', quantity: 3.0 },
        { id: 4, name: 'onions', quantity: 3.0 },
        { id: 5, name: 'garlics', quantity: 1.0 },
        { id: 6, name: 'oil', quantity: 2.0 },
      ]);
    });
};
