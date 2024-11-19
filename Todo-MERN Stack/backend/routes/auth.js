const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

router.post('/register', async(req, res) => {
    const {username, password} = req.body;
    try {
        const user = new User({username, password: await bcrypt.hash(password, 10)});
        await user.save();
        res.status(201).send('User registered');
    } catch {
        res.status(500).send(err.message);
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).send('Invalid credentials');
        }
        
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});


const auth = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if(!token) return res.status(401).send('Access denied');
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send('Invalid token');
    }
};

module.exports = router;
