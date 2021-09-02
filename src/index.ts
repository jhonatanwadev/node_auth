import 'reflect-metadata';
import express from 'express';

import routes from './routes';
import './database/connect';


const app = express();

app.use(express.json);

try {
    app.use(routes);
} catch (error) {
    console.log(error);
}


app.listen(3003, () => console.log('Server is running!'))