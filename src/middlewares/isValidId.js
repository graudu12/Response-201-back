import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';

export const isValidId = (req, res, next) => {
  const { recipeId } = req.params;
  if (!isValidObjectId(recipeId)) {
    return next(createHttpError(400, 'Bad Request'));
  }

  next();
};
