import express from 'express'

import router from './routes'

import mongoose from "mongoose";

const app = express();

mongoose
.connect("mongodb://localhost:27017/lista-de-tarefas")
.then(() => {
    console.log("Database connected successfully.");
    app.listen(3000, () => {
      console.log(`Server is running on port : 3000`);
    });
})
.catch((error) => console.log(error));

app.use(router);
/*
(async () => {
    try {
        //await connectMongo();

        
        console.log('Conexão com MongoDB estabelecida com sucesso');
        
        
        
        app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
    }
})();*/