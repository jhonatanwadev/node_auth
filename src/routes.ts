import { Router } from 'express';

import UserController from './app/controllers/UserController';

const router = Router();

router.get('/users', () => { console.log('xxx') })

export default router;