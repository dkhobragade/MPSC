import express from 'express';
import { login, logout, singUp } from '../controllers/auth.controllers.js';

const router = express.Router();

router.post('/login', login);

router.post('/logout', logout)

router.post('/signup', singUp)

export default router