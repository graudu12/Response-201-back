import express from 'express';
import { getCurrentUserControl } from '../controllers/users.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { auth } from '../middlewares/authenticate.js';

const router = express.Router();

router.get('/current', auth, ctrlWrapper(getCurrentUserControl));

export default router;
