import { Router } from 'express';
import postRouter from './routes/post-router';

import userRouter from './routes/user-router';

const router = Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  return res.render('index', { title: 'Express' });
});
router.use('/users', userRouter);
// api
router.use('/api/posts', postRouter);

export default router;
