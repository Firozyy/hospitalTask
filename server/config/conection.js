import mongoose from "mongoose";

 export const dbConection =()=>{
    mongoose.connect(process.env.MongoUri)
    .then(data => {console.log(`conected wit ${data.connection.host}`);})
    .catch(e => {console.log("conenction problem");})
 }


