const connectDb = require("./db/index.js");
const app = require("./app.js");
const dotenv = require("dotenv").config({
    path : "./.env"
})
connectDb().then((r)=>{
    
    app.listen(process.env.PORT,(err)=>{
        if (err){
            console.log(err);
        };

        console.log("APP IS LISTENING ON PORT",process.env.PORT);
    })
}); 