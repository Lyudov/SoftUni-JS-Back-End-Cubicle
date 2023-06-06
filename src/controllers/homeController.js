const router = require('express').Router();
// const express = require('express');
// const router = express.Router();
const cubeManager = require('../managers/cubeManagers');


router.get('/', async (req, res) => {
    const { search, from, to } = req.query;
    const cubes = await cubeManager.getAll(search, from, to);
    res.render('index', { cubes });
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/404', (req, res) => {
    res.render('404');
})


module.exports = router;