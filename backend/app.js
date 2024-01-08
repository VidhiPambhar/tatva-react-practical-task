const express=require('express');
const bodyParsar = require('body-parser');
const userRoutes = require('./routes/users');
const db = require("./db");

const cors = require('cors')

const app= express();

app.use(bodyParsar.json())
app.use('/users',userRoutes);
app.use(cors({
    origin:"http://localhost:3000"
}))
const PORT = process.env.PORT || 9000

app.listen(PORT,()=>{
    console.log("server has started");
})