const express = require ('express');

const db = require('../data/db-config');

const router = express.Router();

router.get('/', (req, res) => {
    db
    .select('*')
    .from('cars')
    .then( data => {
        res.status(200).json(data);
    }).catch(error => {
        console.log(error);
        res.status(500).json({ errorMessage: `Could getting car information` })
    });
});

router.post('/', (req, res) => {
    const data = req.body;
    db('cars')
    .insert(data, 'id')
    .then( newId => {
        const id = newId[0];
        return db('cars')
        .select('VIN', 'Make', 'Model', 'Mileage', 'Transmission_Type', 'Title_Status')
        .where({ id })
        .first()
        .then( car => {
            res.status(201).json(car);
        })
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ errorMessage: `Error updating car information` })
    })
});

module.exports = router;