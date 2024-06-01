import express from 'express'

import router from './routes'

import mongoose from "mongoose";

import bodyParser from "body-parser";

import axios from 'axios';

const app = express();

app.use(bodyParser.json());

mongoose
.connect("mongodb://localhost:27017/lista-de-tarefas")
.then(() => {
    console.log("Database connected successfully.");
    
    app.listen(3000, () => {
      console.log(`Server is running on port : 3000 `);

      axios.get('http://localhost:3001/')
      .then(response => {
        console.log('Resposta do microserviço:', response.data);
      })
      .catch(error => {
        console.error('Erro ao consumir o microserviço:', error);
      });
    });
})
.catch((error) => console.log(error));

app.use(router);