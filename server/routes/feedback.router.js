const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET all feedback that has been given, populate with data
// from the feedback collection

router.get('/', (req, res) => {
    // gather all feedback
    pool.query('SELECT * FROM "feedback";').then((result)
    => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('error GET /api/feedback', error);
        res.sendStatus(500);
    });
})

// POST feedback 

router.post('/', (req, res) => {
    let allFeedback = req.body;
    console.log('POST feedback', allFeedback);

    let queryText = `INSERT INTO "feedback" ("feeling", "understanding",
    "support", "comments", "date") VALUES ($1, $2, $3, $4, $5);`;

    pool.query(queryText, [allFeedback.feeling, allFeedback.understanding,
    allFeedback.support, allFeedback.comments, allFeedback.date])
    .then(result => {
        res.sendStatus(201);
    }).catch(error => {
        console.log(`Error adding all feedback`, error);
        res.sendStatus(500);
    });
});

module.exports = router;