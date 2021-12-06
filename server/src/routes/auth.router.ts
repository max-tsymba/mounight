import * as express from 'express';

const router: any = express.Router();

router.post('/registation');
router.post('/login');
router.post('/logout');
router.get('/activate/:link');
router.get('/refresh');

module.exports = router;
