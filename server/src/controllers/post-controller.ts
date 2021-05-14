import catchAsync from '../utils/catch-async';
import prisma from '../utils/prisma';

class PostController {
  static addPost = catchAsync<any, any, { caption: string; imageUrl: string }>(async (req, res) => {
    const { caption, imageUrl } = req.body;

    const newPost = await prisma.post.create({
      data: {
        caption,
        imageUrl,
      },
    });

    res.status(201);
    const result = {
      data: { post: newPost },
      meta: { status: res.statusCode },
    };
    return res.json(result);
  });

  static getPosts = catchAsync(async (req, res) => {
    const posts = await prisma.post.findMany();

    const result = {
      data: { post: posts },
      meta: { status: res.statusCode },
    };
    return res.json(result);
  });
}

export default PostController;
