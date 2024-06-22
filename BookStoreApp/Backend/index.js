import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js"
import cors from "cors";
import userRoute from "./route/user.route.js"
const app=express();

app.use(express.json());


app.use(cors());
dotenv.config();
const PORT=process.env.PORT || 4000;
const URI=process.env.MongoDBURI;

//Connect to Mongodb

try {
    mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    console.log("Connected to Mongodb");

    
} catch (error) {
    console.log("Error : ",error);
    
}

// defining routes
app.use("/book",bookRoute);
app.use("/user",userRoute);


app.get("/",(req,res)=>{
    res.send("Hello vishal how are you! what are you doing");
});
app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
})


