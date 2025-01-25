const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    const { userid, password } = req.body;

    try {
        const user = await User.findOne({ userid });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token, role: user.role });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

exports.register = async (req, res) => {
    const { userid, password, role } = req.body;

    try {
        const existingUser = await User.findOne({ userid });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ userid, password: hashedPassword, role });
        await user.save();

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(201).json({ token, role: user.role });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};