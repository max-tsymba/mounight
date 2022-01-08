import * as express from 'express';
import userController from '../controllers/user.controller';
import { body } from 'express-validator';
import authMiddleware from '../middlewares/auth.middleware';

const router: any = express.Router();

router.post(
  '/registration',
  body('email').isEmail(),
  body('password').isLength({ min: 3, max: 32 }),
  userController.registration,
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.put('/update', userController.update);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users/:id', userController.getUser);
router.get('/users', authMiddleware, userController.getUsers);
router.delete('/delete', authMiddleware, userController.delete);

export default router;
