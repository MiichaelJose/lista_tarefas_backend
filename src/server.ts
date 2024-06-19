import express from 'express';

import router from './routes';

import mongoose from 'mongoose';

import bodyParser from 'body-parser';

import 'dotenv/config';

const app = express();

const ENV: any = process.env;

app.use(bodyParser.json());

mongoose
    .connect(ENV.HOST_DATABASE)
    .then(() => {
        console.log('Database connected successfully.');

        app.listen(ENV.PORT, () => {
            console.log(`Server is running on port : ${ENV.PORT} `);
        });
    })
    .catch((error) => console.log(error));

app.use(router);
