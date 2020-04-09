let express = require('express');
let router = express.Router();
router.use(express.json())

router.get('/:username', (req, res) => {
    res.send(`Welcome back ${req.params.username}`);
});

router.delete('/user/:user_id', (req, res) => {
    res.send(`You attempted to delete the user ${req.params.user_id}`);
})

router.put('/user/:user_id', (req, res) => {
    res.send(req.body);
})

module.exports = router