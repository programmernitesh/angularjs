// app.js
const express = require('express')

// Create Express app
const app = express()

// A sample route
app.get('/Sum', function(req, res){
    var a = req.query.a;
    var b = req.query.b;
    var c = parseInt(a) + parseInt(b);
    res.status(200).json(c);
})

// Start the Express server
app.listen(3000, () => console.log('Server running on port 3000!'))