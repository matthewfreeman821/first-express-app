const express = require('express');//pulls in express
const app = express();//sets express function as a constant

app.get('/', (req, res) => {//listen for get requests
    console.log('You have a visitor');//prints this to the console on the server side, in other words to the terminal
    res.send('Hello World');//sends plain text to the page at the port listed later for 
});

app.listen(3000, () => {//tells index.js to listen on port 3000
    console.log('Running on port 3000');
});