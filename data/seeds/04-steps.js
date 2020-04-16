
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        { step: 'toss chicken', recipe_id: '1', ingredients_id: '1' },
        { step: 'add egg', recipe_id: '1', ingredients_id: '1' },
        { step: 'burn', recipe_id: '1', ingredients_id: '1' },
        { step: 'toss beef', recipe_id: '2', ingredients_id: '2' },
        { step: 'add pork', recipe_id: '2', ingredients_id: '2' },
        { step: 'burn', recipe_id: '2', ingredients_id: '2' },
        { step: 'toss bacon', recipe_id: '3', ingredients_id: '3' },
        { step: 'add egg', recipe_id: '3', ingredients_id: '3' },
        { step: 'cook to perfection', recipe_id: '3', ingredients_id: '3' },
      ]);
    });
};
