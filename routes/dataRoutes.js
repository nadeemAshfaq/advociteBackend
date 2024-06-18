const express = require('express');
const router = express.Router();
const Data = require('../models/dataModel');
// Get all data
router.get('/', async (req, res) => {
    try {
        const data = await Data.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create new data
router.post('/AddCiteData', async (req, res) => {
    const data = new Data({
        Title: req.body.Title,
        Author: req.body.Author,
        Journal: req.body.Journal,
        Abbrevition: req.body.Abbrevition,
        Valume: req.body.Valume,
        PageFrom: req.body.PageFrom,
        PageTo: req.body.PageTo,
        CateGory: req.body.CateGory

    });

    try {
        const newData = await data.save();
        res.status(201).json(newData);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get data by ID
router.get('/:id', getData, (req, res) => {
    res.json(res.data);
});
// get data by Category
router.get('/category/:cateGory', async (req, res) => {
    try {
        const data = await Data.find({ CateGory: req.params.cateGory });
        if (data.length === 0) {
            return res.status(404).json({ message: 'No data found for this category' });
        }
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Middleware function to get data by ID
async function getData(req, res, next) {
    let data;
    try {
        data = await Data.findById(req.params.id);
        if (data == null) {
            return res.status(404).json({ message: 'Data not found' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.data = data;
    next();
}

module.exports = router;
