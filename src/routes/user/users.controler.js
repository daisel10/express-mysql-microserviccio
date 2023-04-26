
import { Router } from 'express';
import {getUsers,register,login} from './user.service.js'

const router = Router();

/* GET users listing. */
router.get('/', getUsers);
router.post('/register', register);
router.post('/login',login);


export default router;
