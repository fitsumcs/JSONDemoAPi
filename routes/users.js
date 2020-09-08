const experss = require('express');

const router = experss.Router();

// Getting all users 
router.get('/users', (req, res) => {
    res.send("Getting All Users")
});

// Getting one user 
router.get('/users/:id', (req, res) => {
    res.send(req.params.id)
});

// Creating one user 
router.post('/users', (req, res) => {});

// Updating one user 
router.patch('/users/:id', (req, res) => {});

// Creating one user 
router.delete('/users/:id', (req, res) => {});

module.exports = router;