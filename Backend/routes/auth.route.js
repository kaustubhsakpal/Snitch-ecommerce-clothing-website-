import {Router} from 'express';
import { authcontroller, logincontroller } from '../controllers/authcontroller..js';
import { authmiddleware } from '../middleware/auth.middleware.js';

export const Authrouter = Router();

Authrouter.post("/register",authcontroller);
Authrouter.post("/login",logincontroller);
