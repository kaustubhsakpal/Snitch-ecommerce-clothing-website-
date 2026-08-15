import {Router} from 'express';
import { authcontroller } from '../controllers/authcontroller..js';

export const Authrouter = Router();

Authrouter.post("/register",authcontroller);
