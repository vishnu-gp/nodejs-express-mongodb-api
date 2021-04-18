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
router.post('/', async (req, res) => {
    const tab = new Tab(req.body)
    try {
        const newTab = await tab.save()
        res.status(201).json(newTab)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Update a tab
router.put('/:id', getTab, async (req, res) => {
    try {
        const resData = await res.tab.update(req.body, { new: true, runValidators: true })
        res.json(resData)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Delete a tab
router.delete('/:id', getTab, async (req, res) => {
    try {
        await res.tab.remove()
        res.json({ message: 'Deleted Tab' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Middleware to get tab
async function getTab(req, res, next) {
    try {
        tab = await Tab.findById(req.params.id)
        if (tab == null) {
            return res.status(404).json({ message: 'Cant find tab' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.tab = tab
    next()
}

module.exports = router