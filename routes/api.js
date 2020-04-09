// create router
let express = require('express');
let router = express.Router();

// middleware to read json data
router.use(express.json());

// get all records
router.get('/', (req, res) => {
    res.send("You attempted to read multiple records");
});

// get record by id
router.get('/:item_id', (req, res) => {
    res.send(`You attempted to view item ${req.params.item_id}`);
});

// create record
router.post('/', (req, res) => {
    // send back info passed in postman
    res.send(req.body);
});

// export routes
module.exports = router