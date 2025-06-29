import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import pino from 'pino-http';
import router from './routers/index.js';
import cors from 'cors';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { getEnvVar } from './utils/getEnvVar.js';
import allRouters from './routers/index.js';
import { swaggerDocs } from './middlewares/swaggerDocs.js';

export const setupServer = () => {
  dotenv.config();
  const PORT = getEnvVar('PORT', '3000');
  const app = express();
  app.use(express.json());
  app.use(cookieParser());
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );
  app.use(cors());
  app.use('/api', allRouters);
  // app.use('/uploads', express.static(UPLOAD_DIR));
  app.use('/api-docs', swaggerDocs());
  app.use(router);
  app.use(notFoundHandler);
  app.use(errorHandler);
  app.listen(PORT, (error) => {
    if (error) {
      throw error;
    }
    console.log(`Server is running on port ${PORT}`);
  });
};
