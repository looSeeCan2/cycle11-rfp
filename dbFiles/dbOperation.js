const config  = require("./dbConfig"),
        sql    =require("mssql"); /// this has to be installed


const getEmployees = async(sso) => {
    try{
        console.log(sso);
        let pool = await sql.connect(config);
        // let employees = await pool.request().query(`SELECT * from Employee WHERE sso = ${/sso}`);
        let employees = await pool.request().query(`SELECT * from Employee`);
        console.log(employees);
        return employees;
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = {
    getEmployees
}