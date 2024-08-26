import { register } from '@/controllers/AuthController';
import express from 'express';

const authRouter = express.Router();

authRouter.post('/register', register);

export default authRouter;
