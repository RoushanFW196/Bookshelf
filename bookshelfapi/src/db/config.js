const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://roushankumar6338bookstore:IhNTpImo3arSlDEu@bookstorecluster.b1tditx.mongodb.net/BookStore",
    {}
  )
  .then(() => console.log("Connected to"))
  .catch((e) => console.log("not connected", e.message));
