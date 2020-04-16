
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        { recipe_id: '1', ingredients_id: '1', ingredient_quantity: '1.2' },
        { recipe_id: '2', ingredients_id: '1', ingredient_quantity: '1.7' },
        { recipe_id: '3', ingredients_id: '1', ingredient_quantity: '200' },
        { recipe_id: '1', ingredients_id: '2', ingredient_quantity: '5' },
        { recipe_id: '2', ingredients_id: '2', ingredient_quantity: '5.2' },
        { recipe_id: '3', ingredients_id: '2', ingredient_quantity: '74.1' },
        { recipe_id: '1', ingredients_id: '3', ingredient_quantity: '5.123' },
        { recipe_id: '2', ingredients_id: '3', ingredient_quantity: '76.123' },
        { recipe_id: '3', ingredients_id: '3', ingredient_quantity: '100.99' },
      ]);
    });
};
