const express = require('express')
const router = express.Router()
const Tab = require('../models/tab')

// Get all tabs
router.get('/', async (req, res) => {
    try {
        const tabs = await Tab.find()
        res.json(tabs)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Create a tab
router.post('/', (req, res) => {
})

// Update a tab
router.put('/:id', (req, res) => {
})

// Delete a tab
router.delete('/:id', (req, res) => {
})

module.exports = router