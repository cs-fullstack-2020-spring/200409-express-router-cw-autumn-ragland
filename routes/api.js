let express = require('express');
let router = express.Router();
router.use(express.json());

router.get('/', (req, res) => {
    res.send("You attempted to read multiple records");
});

router.get('/:item_id', (req, res) => {
    res.send(`You attempted to view item ${req.params.item_id}`);
});

router.post('/', (req, res) => {
    res.send(req.body);
});

module.exports = router