const db = require('./db-config')

module.exports = {
    getRecipes,
    getInstructions,
    getShoppingList
}

function getRecipes() {
    return db('recipes')
}

function getShoppingList(id) {
    return db('recipes')
        .select('recipes.recipe', 'ingredients.ingredient', 'recipe_ingredients.ingredient_quantity')
        .join('recipe_ingredients', 'recipes.id', 'recipe_ingredients.recipe_id')
        .join('ingredients', 'ingredients.id', 'recipe_ingredients.ingredients_id')
        .where('recipes.id', id)
}

function getInstructions(id) {
    return db('recipes')
        .select('steps.step', 'ingredients.ingredient', 'recipe_ingredients.ingredient_quantity', 'recipes.recipe')
        .join('steps', 'recipes.id', 'steps.recipe_id')
        .join('recipe_ingredients', 'recipes.id', 'recipe_ingredients.recipe_id')
        .join('ingredients', 'recipe_ingredients.ingredients_id', 'ingredients.id')
        .where('recipes.id', id)

}