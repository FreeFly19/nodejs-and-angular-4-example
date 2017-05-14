const express = require('express');
const userRoute = express.Router();

const users = [
    {id: 1, name: "Pidar", age: 3},
    {id: 2, name: "Hiy", age: 2},
    {id: 3, name: "Chmo", age: 1}
];


userRoute.get('/', (req, res) => {
    res.send(users);
});

userRoute.get('/:userId', (req, res) => {
    res.send(users.find(user => user.id == req.params.userId));
});

module.exports = userRoute;