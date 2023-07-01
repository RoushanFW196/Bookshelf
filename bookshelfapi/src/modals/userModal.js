const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
  first_name:{type:"string",required:true},
  last_name:{type:"string",required:true},
  email:{type:"string",required:true},
  age:{type:Number,required:true},
  mobile:{type:Number,required:true}
});


const Users=new mongoose.model('user',userSchema);
module.exports = Users;