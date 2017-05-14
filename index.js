const startTime = new Date().getTime();

const express = require('express');
const path = require('path');

const app = express();
const userRoute = require('./userRouter');


app.use('/api/users', userRoute);
app.use(express.static(path.join(__dirname, 'public')));


app.listen(3000, () =>{
    console.log('Started in: ' + (new Date().getTime() - startTime) + 'ms');
});
