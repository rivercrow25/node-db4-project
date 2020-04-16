
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient: 'stuff' },
        { ingredient: 'thing' },
        { ingredient: 'whatnot' }
      ]);
    });
};
