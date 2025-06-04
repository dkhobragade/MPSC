import express from 'express';
import { checkAuth, login, logout, signUp } from '../controllers/auth.controllers.js';
import { protectRoute } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/login', login);

router.post('/logout', logout)

router.post('/signup', signUp)

router.get('/check',protectRoute,checkAuth)

export default router