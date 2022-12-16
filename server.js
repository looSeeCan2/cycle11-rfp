const express = require("express"), 
    cors = require("cors"); /// create an expres server



const API_PORT = process.env.PORT || 5005 /// define a port
const app = express(); ///assign expres to a variable





app.listen(API_PORT, () => console.log(`Listening on Port${API_PORT}`));
