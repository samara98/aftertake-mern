import { NextFunction, Request, RequestHandler, Response } from 'express';

const catchAsync = (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) => {
  const result: RequestHandler = async (req, res, next) => {
    fn(req, res, next).catch(next);
  };
  return result;
};

export default catchAsync;
