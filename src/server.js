import express from 'express';
import { router } from "./routes";
import './service/mongodb'


const app = express();

app.use(
    express.urlencoded({ extended: true }),
    express.json()
)

app.use(router);


app.listen(3000,() => console.log("server is running!🚀"));