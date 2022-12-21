const config  = require("./dbConfig"),
        sql    =require("mssql"); /// this has to be installed


const getEmployees = async(sso) => {
    try{
        // console.log(sso);
        let pool = await sql.connect(config);
        // let employees = await pool.request().query(`SELECT * from Employee WHERE sso = ${/sso}`);
        let employees = await pool.request().query(`SELECT * from Employee`);
        // console.log(employees);
        return employees;
    }
    catch(error) {
        console.log(error);
    }
}

const register = async(employee) => { /// get the data from the database
    try {
        let pool = await sql.connect(config);
        await pool.request().query(`INSERT INTO Employee (sso, fullname, email, birth, pwd)
            VALUES (${employee.sso}, '${employee.fullname}', '${employee.email}', '${employee.birthday}', '${employee.password}')
        `);
        // return employees; /// I don't think I need this return /// const employess = await^
    }
    catch(error) {
        console.log(error);
    }
}


module.exports = {
    getEmployees,
    register
}