const express = require('express')

const db = require('../data/dbhelper')

const router = express.Router()

router.get('/', (req, res) => {
    db.getRecipes()
        .then(reci => {
            res.status(200).json(reci)
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        })
})

router.get('/:id', (req, res) => {
    db.getShoppingList(req.params.id)
        .then(list => {
            res.status(200).json(list)
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
            console.log(error.message)
        })
})

router.get('/:id/instructions', (req, res) => {
    db.getInstructions(req.params.id)
        .then(steps => {
            res.status(200).json(steps)
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        })
})

module.exports = router