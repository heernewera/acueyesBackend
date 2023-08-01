const User = require('../models/user_model');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const exstinguser = await User.findOne({ email });
        if (!exstinguser) {
            res.status(404).json({ error: 'user not found' });
        }

        if (password !== exstinguser.password) {
            res.status(401).json({ error: 'Invalied Password' });
        }

        const token = jwt.sign({ tokenData: exstinguser }, 'secret', { expiresIn: '1h' });
        res.json({ status: 200, msg: 'Login Successful', data: { token, exstinguser } });

    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = { login };