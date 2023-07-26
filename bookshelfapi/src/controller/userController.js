const express = require('express');
const router=express.Router();
const Users=require("../modals/userModal")


router.get("/",function(req,res){
    res.send('Hello user,Welcome to Book Store. ')
})


router.get("/login",function(req,res){
    const{email,password} = req.body;
   
    res.send('Hello user,please wait for login. ')
})




// router.post("/signup",function(req,res){
//     const{email,password} = req.body;
//     console.log({email,password});
//     res.send('Hello user,please wait for signup. ')
// })





router.post("/signup",async function(req, res){
   
    try {
      
    
        const newuser = await Users.create({
          first_name:req.body.first_name,
          last_name:req.body.last_name,
          email:req.body.email,
          mobile:req.body.mobile,
          password:req.body.password,
          cpassword:req.body.cpassword,
          profile_pic:req.body.profile_pic
        });
    
        return res.status(201).json({ user: newuser});
      } catch (err) {
        console.log('error',err)
        res.status(404).json({ err: "something went wrong" });
      }
})









module.exports =router