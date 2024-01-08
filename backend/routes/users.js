const express =require('express')
const router = express.Router()
const User =require('../models/user');


router.post('/',async(req,res)=>{
    try{
   await User.createUser(req.body);

        res.status(201).send("User created Successfully");
    }
    catch(error){
        res.status(500).send("Error creating user")
    }
})

router.get('/all',async(req,res)=>{
    try{
        let {page,limit} = req.query;
        let pageNumber = parseInt(page) || 1;
        let resultPerPage = parseInt(limit) || 10;

        if(req.query.offset && req.query.limit){
            pageNumber = Math.max(parseInt(req.query.offset / req.query.limit) + 1, 1 );
            resultPerPage = parseInt(req.query.limit)
        }
    //   const user= await User.getUsersWithPagination(pageNumber,resultPerPage);
      const users = await User.getAllUsers();
        res.json(users[0])
    }
    catch(error){
        res.status(500).send("Error fetching user")
    }
})
router.get('/:id',async(req,res)=>{
    try{
      const user= await User.getUserById(req.params.id);
        res.json(user[0])
    }
    catch(error){
        res.status(500).send("Error fetching user")
    }
})

router.put('/:id',async(req,res)=>{
    try{
     await User.updateUser(req.params.id,req.body);
     res.status(201).send("User updated Successfully");

    }
    catch(error){
        res.status(500).send("Error fetching user")
    }
})

router.delete('/:id',async(req,res)=>{
    try{
     await User.updateUser(req.params.id);
     res.status(201).send("User deleted Successfully");

    }
    catch(error){
        res.status(500).send("Error fetching user")
    }
})

module.exports = router;