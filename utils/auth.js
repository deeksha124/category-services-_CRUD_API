const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {settings} = require("../setting")
// Middleware to verify JWT
function verifyToken(req, res, next) {
    const genratedToken = req.headers['authorization'];
    if (!genratedToken ) {
        return res.status(403).send({ auth: false, message: 'No token provided.' });
    }
    const token = genratedToken.split(" ").pop();

    jwt.verify(token, settings.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        }
        req.userId = decoded.id;
        next();
    });
}

module.exports = verifyToken