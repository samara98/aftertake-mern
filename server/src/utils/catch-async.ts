import { NextFunction, Request, RequestHandler, Response } from 'express';
import * as core from 'express-serve-static-core';

import prisma from './prisma';

const catchAsync = <
  P = core.ParamsDictionary,
  ResBody = any,
  ReqBody = any,
  ReqQuery = core.Query,
  Locals extends Record<string, any> = Record<string, any>,
>(
  fn: (
    req: Request<P, ResBody, ReqBody, ReqQuery, Locals>,
    res: Response<ResBody, Locals>,
    next: NextFunction,
  ) => Promise<any>,
) => {
  const result: RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals> = async (req, res, next) => {
    fn(req, res, next)
      .catch(next)
      .finally(async () => {
        await prisma.$disconnect();
      });
  };
  return result;
};

export default catchAsync;
