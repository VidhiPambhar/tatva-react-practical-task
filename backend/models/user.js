const db = require("../db");
console.log("dbbbbbbbbbb",db);
class User{
    static createUser(user){
        console.log("usetssssssss",user);
        try{
            return db.execute(`INSERT INTO users (firstName,lastName,email,phone,status) VALUSE (?,?,?,?,?)`,[
                user.firstName,
                user.lastName,
                user.email,
                user.phone,
                user.status
            ])
        }catch(error){
            console.log("error------",error);
        }
    }

    static getAllUsers(){
        return db.query('SELECT * from users');
    }
 
    static async getUsersWithPagination(pageNumber,resultPerPage){
        const offset = (pageNumber-1)* resultPerPage

        try{
            let query = 'SELECT * from users LIMIT ?, ?'
            const queryParams = [offset,resultPerPage];
           const users= await db.execute(query,queryParams)
            return users[0];
        }catch(error){
            throw new Error("error fetching users")
        }
        
    }
    
    static getUserById(id){
        return db.execute('SELECT * from users WHERE id = ?',[id]);
    }

    static updateUser(id,user){
        return db.execute('UPDATE users SET firstName=?,lastName = ? , email= ? ,phone = ? , status= ? WHERE id=?',[
            user.firstName,
            user.lastName,
            user.email,
            user.phone,
            user.status,
            id
        ]);
    }
    static deleteUser(id){
        return db.execute('DELETE from users WHERE id = ?',[id]);
    }
}

module.exports=User