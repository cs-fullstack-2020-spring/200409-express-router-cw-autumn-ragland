// create router
let express = require('express');
let router = express.Router();

// middleware ro read json data
router.use(express.json())

// get user
router.get('/:username', (req, res) => {
    res.send(`Welcome back ${req.params.username}`);
});

// delete user
router.delete('/user/:user_id', (req, res) => {
    res.send(`You attempted to delete the user ${req.params.user_id}`);
})

// update user
router.put('/user/:user_id', (req, res) => {
    // send info passed in postman
    res.send(req.body);
})

// export routes
module.exports = router