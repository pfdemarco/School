const router = require('express').Router();
const notes = require('../db/db.json');
const fs = require('fs');
const uuid = require('uuid');


router.get('/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        const getPostIT = JSON.parse(data);
        res.json(getPostIT);
    });
});

router.post('/notes', (req, res) => {
    let postITID = uuid.v4();
    let newNote = {
        id: postITID,
        title: req.body.title,
        text: req.body.text,
    };

    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        const getPostIT = JSON.parse(data);
        getPostIT.push(newNote);
        fs.writeFile('./db/db.json', JSON.stringify(getPostIT), err => {
            if (err) throw err;
            res.send(notes)
        });
    });
});

router.delete('/notes/:id', (req, res) => {
    let postITID = req.params.id;
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;

        const getPostIT = JSON.parse(data);
        console.log(JSON.parse(data));
        const filPostIT = getPostIT.filter((note) => note.id != postITID);//creates new array with out the 1 id in it
        console.log(filPostIT);
        fs.writeFile('./db/db.json', JSON.stringify(filPostIT), err => {
            if (err) throw err;
            res.send(notes);
        });
    });
});

module.exports = router;