import mongoose from "mongoose";

export const mongooseConnection = () => {
    mongoose
      .connect( process.env.DB as string )
      .then(() => {
        console.log("Successfully connected to database " );
      })
      .catch((error) => {
        console.log("database connection failed. exiting now...");
        console.error(error);
        process.exit(1);
      });
  };


  export default mongooseConnection;