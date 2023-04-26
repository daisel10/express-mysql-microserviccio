
import { Router } from 'express';
import {getUser,register,login} from './user.service.js'

const router = Router();

/* GET users listing. */
router.get('/', getUser);
router.post('/register', register);
router.post('/login',login);


export default router;
