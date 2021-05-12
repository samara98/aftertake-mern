import catchAsync from '../utils/catch-async';

class UserController {
  static getUser = catchAsync(async (req, res, next) => {
    return res.json({ message: 'respond with a resource' });
  });
}

export default UserController;
