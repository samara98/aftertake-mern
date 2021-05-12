import { Router } from 'express';

import UserController from '../controllers/user-controller';

const userRouter = Router();

/* GET users listing. */
userRouter.get('/', UserController.getUser);

export default userRouter;
