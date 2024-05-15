import express from 'express'

import router from './routes'

import connectMongo  from './config/database.ts'

const app = express();

(async () => {
    try {
        await connectMongo();
        console.log('Conexão com MongoDB estabelecida com sucesso');
        
        app.use(router);
        
        app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
    }
})();