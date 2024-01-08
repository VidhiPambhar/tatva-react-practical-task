const mysql = require('mysql2')


var pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:"user-crud"
    
})

pool.getConnection((err,connection)=>{
    if(!err){
        console.log("connection established");
        connection.release()
    }
    else{
        console.log("connection failed",err.message);
        
    }
})

module.exports=pool.promise();



