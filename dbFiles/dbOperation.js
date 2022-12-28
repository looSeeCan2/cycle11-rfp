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

const register = async(employee) => { /// get the data from the database
    try {
        let pool = await sql.connect(config);
        /// TODO: so I need to check if the sso number already exist in the database. true > alert("sso number already exist"),
        /// false > add the object to the database
        console.log("employee:" ,employee);
        /// I need all the sso values here, so I can do a comparison
        // const a = await getEmployees();
        // console.log("a:" ,a.recordset);
        /// loop thru the array of objects and compare the sso numbers to this sso
        
        
        await pool.request().query(`INSERT INTO Employee (sso, fullname, email, birth, pwd)
            VALUES (${employee.sso}, '${employee.fullname}', '${employee.email}', '${employee.birthday}', '${employee.password}')
        `);
        // return employees; /// I don't think I need this return /// const employess = await^
    }
    catch(error) {
        // alert(error);
        // window.alert("test")
        console.log("Catch:" ,error);
    }
}


module.exports = {
    getEmployees,
    register
}