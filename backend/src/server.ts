import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// P/ colocar em produção necessario Variaveis ambiente: https://blog.rocketseat.com.br/variaveis-ambiente-nodejs/
app.use('/uploads', express.static(path.join(__dirname, '..', '/uploads')));
app.use(errorHandler);

app.listen(3333);