const { getUsers } = require('../services/users');

async function checkUser(req, res, next) {
    const userId = req.headers['user-id'];
    const users = await getUsers()

    const user = users.find(({ id }) => id === userId);

    if (user) {
        req.userId = userId;
        req.user = user;
    } 
    next();
}

async function validateUser (req, res, next) {
    if (req.user) {
        next();
    } else {
    res.status(401).json({ message: 'you are not allowed' }).end();
}}

module.exports = {checkUser, validateUser};