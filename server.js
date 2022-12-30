const express = require("express"), 
    cors = require("cors"), /// create an expres server
    dbOperation = require("./dbFiles/dbOperation");
    sql = require("mssql");


const API_PORT = process.env.PORT || 5005 /// define a port
const app = express(); ///assign expres to a variable

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post("/api", async(req, res) => {
    console.log("called");
    // console.log(req.body);
    const result = await dbOperation.getEmployees(req.body.sso);
    // console.log("result", result.recordset);
    res.send(result.recordset)

})

app.post("/create", async(req, res) => {/// TODO: I don't think I need the dbOperation.getEmployess in here
    console.log("create");
    // console.log(req);
    // console.log(req.body);
    await dbOperation.register(req.body);/// the only difference is this operation that adds a new employee to the table
    const result = await dbOperation.getEmployees(req.body.sso);
    console.log("result",result.recordset);
    res.send(result.recordset);
})



app.listen(API_PORT, () => console.log(`Listening on Port${API_PORT}`));
