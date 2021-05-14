import { Router } from 'express';

import PostController from '../controllers/post-controller';

const postRouter = Router();

// add post
postRouter.post('/', PostController.addPost);
// show post
postRouter.get('/', PostController.getPosts);

export default postRouter;
