import express from "express";
import router from "./routes";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors';
import "dotenv/config";

const app = express();

const ENV: any = process.env;

app.use(cors());
app.use(bodyParser.json());

// abre uma conexao com o banco através do endereço, o pool de conexao inicia diversas
// "sub-conexoes" de baixo nivel, essas conexao sao aberta e mantidas ativas 
mongoose
    .connect(ENV.HOST_DATABASE, {
        minPoolSize: 1,
        maxPoolSize: 10
    })
    .then(() => {
        console.log("Database connected successfully.");
        app.listen(ENV.PORT, () => {
            console.log(`Server is running on port : ${ENV.PORT} `);
        });
    })
    .catch((error) => console.log(error));

app.use(router);
