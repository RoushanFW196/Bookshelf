const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
  first_name:{type:"string",required:true},
  last_name:{type:"string",required:true},
  email:{type:"string",required:true},
  mobile:{type:Number,required:true},
  password:{type:"string",required:true},
  cpassword:{type:"string",required:true},
  profile_pic:{type:"string",required:true}
});


const Users=new mongoose.model('user',userSchema);
module.exports = Users;