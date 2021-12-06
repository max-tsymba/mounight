import * as express from 'express';
import userController from '../controllers/user.controller';

const router: any = express.Router();

router.post('/registation', userController.registration);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', userController.getUsers);

export default router;
