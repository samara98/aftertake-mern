import { Router } from 'express';

import userRouter from './routes/user-router';

const router = Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  return res.render('index', { title: 'Express' });
});
router.use('/users', userRouter);

export default router;
