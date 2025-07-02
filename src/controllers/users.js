import { UserCollection } from '../db/models/user.js';

export const getCurrentUserControl = async (req, res, next) => {
  try {
    const { id } = req.user;

    const user = await UserCollection.findById(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({
      id: user._id,
      username: user.name,
      initial: (user.name || '').charAt(0).toUpperCase() || '',
      fullName: user.name,
      avatarUrl: user.avatarUrl || '',
      role: user.role,
      createdAt: user.createdAt,
      lastLogin: user.lastLogin,
      favoriteRecipes: user.favoriteRecipes || [],
    });
  } catch (error) {
    next(error);
  }
};
