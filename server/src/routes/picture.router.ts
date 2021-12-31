import * as express from 'express';
import pictureController from '../controllers/picture.controller';

const router: any = express.Router();

router.post('/upload', pictureController.create);
router.get('/pictures', pictureController.getAll);
router.get('/pictures/:id', pictureController.getOne);
router.delete('/pictures/remove/:id', pictureController.delete);

export default router;
