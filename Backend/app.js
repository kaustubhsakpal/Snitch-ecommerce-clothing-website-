import express from 'express';
import { Authrouter } from './routes/auth.route.js';
import cors from 'cors';
import morgan from 'morgan';
const app = express();

app.use(express.json())
app.use(morgan('dev'))
app.use(cors("*"))



app.use('/api/auth',Authrouter)


export default app;