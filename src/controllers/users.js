import { getCurrentUser} from '../services/users.js';

export const getCurrentUserControl = async (req, res, next) => {

  const user = await getCurrentUser(req.user.id);

  res.status(200).json({
    status: 200,
    message: 'Successfully found info about user',
    data: user,
  });

};
