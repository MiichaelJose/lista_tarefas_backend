import express from 'express'

import router from './routes'

import mongoose from "mongoose";

import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

mongoose
.connect("mongodb://localhost:27017/lista-de-tarefas")
.then(() => {
    console.log("Database connected successfully.");
    app.listen(3000, () => {
      console.log(`Server is running on port : 3000 `);
    });
})
.catch((error) => console.log(error));

app.use(router);