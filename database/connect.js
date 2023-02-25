const mongoose = require('mongoose');

let mongourl = process.env.MONGO_URI;

// 8CMSLeZLwOzV0BNF

const connectDatabase = () => {
    mongoose.connect(mongourl,{
        useNewUrlParser : true 
    }).then(()=>{
        console.log("MongoDB server connected successfully ");
    }).catch((err)=>{
        console.log("Error occured while connecting to mongoDB : "+ err);
    })
}

mongoose.set({
    strictQuery : false
})

const connection = mongoose.connection;

connection.on("open" ,()=> {
    console.log("Database connection open");
}).on("close",()=>{
    console.log("Database connection closed");
}).on("error",(error)=>{
    console.log("Error occured in database connection : "+error);
})

module.exports = connectDatabase;