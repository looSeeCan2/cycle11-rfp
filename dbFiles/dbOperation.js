const config  = require("./dbConfig"),
        sql    =require("mssql"); /// this has to be installed

// const alert = require('alert-node');

const getEmployees = async(sso) => {
    try{
        // console.log(sso);
        let pool = await sql.connect(config);
        // let employees = await pool.request().query(`SELECT * from Employee WHERE sso = ${sso}`);
        let employees = await pool.request().query(`SELECT * from Employee`);
        // console.log(employees);
        return employees;
    }
    catch(error) {
        console.log(error);
    }
}

const register = async(item) => { 
    try {
        console.log("item:", item);
        let pool = await sql.connect(config);
        
        await pool.request().query(`INSERT INTO Employee (sso, fullname, email, birth, pwd)
            VALUES (${item.sso}, '${item.fullname}', '${item.email}', '${item.birthday}', '${item.password}')
        `);
    }
    catch(error) {
        console.log("Catch:" ,error);
        
    }
}


module.exports = {
    getEmployees,
    register
}