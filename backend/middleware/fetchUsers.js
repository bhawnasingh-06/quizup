var jwt = require('jsonwebtoken');
const JWT_SECRET = 'thisisquizupappusers';
const fetchUsers = (req, res, next) => {
    //Get the admin from the jwt token and add id to req object
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" });
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.users = data.users;
        next();

    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" });
    }

}
module.exports = fetchUsers;