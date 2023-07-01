const mongoose=require('mongoose');

const bookSchema=new mongoose.Schema({
 

  "author": {type:"string",required:true},
    "country": [ {type:"string",required:true}],
    "imageLink": {type: String},
    "language":  [ {type:"string",required:true}],
    "link":{type: String},
    "pages":{type:Number,required:true},
    "title": {type:"string",required:true},
    "yearOfPrinting": {type:Date,required:true},




});


const Books=new mongoose.model('book',bookSchema);
module.exports = Books;