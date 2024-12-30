import app from "./app";
import mongoose from "mongoose";
import mongooseConnection from "./config/mongo";






const start = async () => { 
     mongooseConnection();

    app.listen(process.env.PORT , () => {
        console.log('Server is running on port 8000');
    });
}
 

start();
