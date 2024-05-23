const jwt = require('jsonwebtoken');
const {settings} = require("../setting")
exports.login =  (req, res) => {
    const { email, password } = req.body;
    if (email === 'admin@codesfortomorrow.com' && password === 'Admin123!@#') {
        const id = 1; // Replace with actual user ID from the database
        const token = jwt.sign({ id }, settings.JWT_SECRET, { expiresIn: 86400 }); // Expires in 24 hours
        res.status(200).json({ 'msg' : "Login successfully" , auth: true, token: token });
    } else {
        res.status(401).json({'msg' : 'Invalid credentials'});
    }
};