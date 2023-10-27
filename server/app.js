import express, { urlencoded } from "express";
import dotenv from "dotenv";
import userRoutes from "./route/userRoutes.js";
import { errorHandler, notFound } from "./middlewares/error.js";
import cors from 'cors'
import path from "path"
import { fileURLToPath } from 'url'
const app = express();
dotenv.config({path:"./config/.env"})
// cors platform (for both work dev mod)

// app.use(cors({
//     origin:process.env.frontend_url,
//     credentials:true,
//     methods:["GET","POST","DELETE","PUT",]

// }))

app.use(express.json())



app.use(urlencoded({extended:true}))
app.use("/api/v1",userRoutes)

// build path
const _filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(_filename)
const buildPath = path.join(__dirname, '../aim/build/');
const indexPage = path.join(buildPath, '/index.html');

app.use(express.static(buildPath));

app.get('/*', (req,res)=>{
    res.sendFile(indexPage);
});

app.use(notFound)
app.use(errorHandler);
export default app;

