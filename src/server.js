import express from 'express';
import { router } from "./routes";
import './service/mongodb'
import cors from 'cors'

// Printing process.env property value

const app = express();

app.use(cors())

app.use(
    express.urlencoded({ extended: true }),
    express.json()
    )
    
app.use(router);


app.listen(process.env.PORT || 5000,() => console.log("server is running!🚀"));