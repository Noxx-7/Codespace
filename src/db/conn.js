const mongoose = require("mongoose");

//created database

mongoose.connect("mongodb://localhost:27017/assiment", {
    //  useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("Connection Successful");

}).catch((error)=>{
    console.log(error);
})