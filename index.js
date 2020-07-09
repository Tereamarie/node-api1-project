const express = require("express");

const server = express();

//Get/ // Resting API//
server.get('/', (req, res) => {
     res.json({hello:'world'});
});

const PORT = 5000;
server.listen(PORT, () => {
    console.log('Listening on localhost:', PORT);
})