const express = require('express');
const app = express();
const PORT=process.env.PORT||8000;
require("./db/config");
const userController=require('./controller/userController');
app.use(express.json());






app.use('/user',userController);














console.log('hello world')
app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`);
});















