
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        { recipe_id: 1, step_number: 1, text: 'Wash the rice' },
        { recipe_id: 1, step_number: 2, text: 'Prepare all spices' },
        { recipe_id: 1, step_number: 3, text: 'Fry the spices with oil' },
        { recipe_id: 1, step_number: 4, text: 'Pour washed rice into frying spices' },
        { recipe_id: 1, step_number: 5, text: 'Constantly add water until ready' },
        { recipe_id: 1, step_number: 6, text: 'Share with family and friends' },
        { recipe_id: 2, step_number: 1, text: 'Buy a kilo of garri' },
        { recipe_id: 2, step_number: 2, text: 'Boil a litre of water' },
        { recipe_id: 2, step_number: 3, text: 'Pour garri into the boiling water' },
        { recipe_id: 2, step_number: 4, text: 'Stir until hard' },
      ]);
    });
};
