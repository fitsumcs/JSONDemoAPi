const experss = require('express');
const User = require('../models/user');

const router = experss.Router();

// Getting all users 
router.get('/users', async(req, res) => {
    try {
        const allUsers = await User.find({});
        res.json(allUsers);
    } catch (err) {

        res.status(500).json({ error: err.message });

    }
});

// Getting one user 
router.get('/users/:id', (req, res) => {
    res.send(req.params.id);
});

// Creating one user 
router.post('/users', async(req, res) => {

    // creating user 
    const user = new User({
        name: req.body.name,
        age: req.body.age,
        phone: req.body.phone
    });

    // saving 
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);

    } catch (err) {

        res.status(400).json({ error: err.message });
    }

});

// Updating one user 
router.patch('/users/:id', (req, res) => {});

// Creating one user 
router.delete('/users/:id', (req, res) => {});

module.exports = router;