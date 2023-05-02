
import { Router } from 'express';
import {getUsers,register,login} from './user.service.js'

const router = Router();

// GET all Users
router.get('/', getUsers);

// POST register Users
router.post('/register', register);

// POST login Users
router.post('/login',login);


export default router;
