const mongoose = require("mongoose");
const database_name = require("../constants.js");
const connectDb = async () => {
    try{
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${database_name}`);
        if (connection){
            console.log("MONGO DB CONNECTED!!");
        }
    }catch (err){
        console.log("MONGO DB CONNECTION ERR!!!",err);
    }
};

module.exports = connectDb;