import * as express from 'express';
import pictureController from '../controllers/picture.controller';

const router: any = express.Router();

router.post('/upload/:id', pictureController.create);
router.get('/pictures', pictureController.getAll);
router.get('/pictures/:id', pictureController.getOne);
router.get('/user/:id', pictureController.getAllByUser);
router.delete('/remove/:id', pictureController.delete);
router.get('/download/:id', pictureController.downloadFile);

export default router;
