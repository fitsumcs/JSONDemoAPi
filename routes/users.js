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
router.get('/users/:id', getUser, (req, res) => {
    res.send(res.user);
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
router.patch('/users/:id', getUser, async(req, res) => {
    if (req.body.name) {
        res.user.name = req.body.name;
    }
    if (req.body.age) {
        res.user.age = req.body.age;
    }
    if (req.body.phone) {
        res.user.phone = req.body.phone;
    }
    try {
        const updateUser = await res.user.save();
        res.json(updateUser);
    } catch (error) {
        res.status(400).json({ error: err.message });

    }
});

// Creating one user 
router.delete('/users/:id', getUser, async(req, res) => {

    try {
        await res.user.remove();
        res.json({ message: "User Deleted!!" })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
});



// getting with id 
async function getUser(req, res, next) {
    let user;
    try {
        user = await User.findById(req.params.id);
        if (user === null) {
            return res.status(404).json({ error: "Sorry we Can Not find the User!!" });
        }
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }

    res.user = user;
    next();
}
module.exports = router;