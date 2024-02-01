const express = require('express');
const app = express();

app.use('/character-name',(req, res, next) => {
    console.log("player entered character name")
    res.send('<h1>You are welcome to begin!</h1>');
})

app.use('/',(req, res, next) => {
    console.log("another day in the bay")
    res.send('<h1>This is my express trial</h1>');
})

app.listen(3000);
