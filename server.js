const express = require("express"), 
    cors = require("cors"); /// create an expres server
const { getEmployees } = require("./dbFiles/dbOperation");
    dbOperation = require("./dbFiles/dbOperation");


const API_PORT = process.env.PORT || 5005 /// define a port
const app = express(); ///assign expres to a variable

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post("/api", async(req, res) => {
    console.log("called");
    console.log(req.body);
    console.log(req.body.sso);
    const result = await dbOperation.getEmployees(req.body.sso);
    console.log("result", result);
    res.send(result.recordset)

})


app.listen(API_PORT, () => console.log(`Listening on Port${API_PORT}`));
