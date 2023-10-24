
import app from "./app.js";
import { dbConection } from "./config/conection.js";
import cloudinary from "cloudinary"
dbConection()
cloudinary.v2.config({
    cloud_name: process.env.Cloud_Name,
    api_key: process.env.API_Key,
    
    api_secret: process.env.API_Secret
 });
const port = process.env.PORT
app.listen(port,()=>{
    console.log(`server is up ${port}`);
})
