import createHttpError from 'http-errors';
import { UserCollection } from '../db/models/user.js';

export const getCurrentUser = async (userId) => {
  const user = await UserCollection.findById(userId);

  if (!user) {
     throw createHttpError(404, 'User not found');
  }

  return user;
};