import express, { Application } from 'express';
import cors from 'cors';
import routes from './routes';
import { errorHandler } from './middlewares/error.middleware';
import { requestLogger } from './middlewares/logger.middleware'; // 1. Import logger-nya

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2. Pasang logger middleware di sini (HARUS sebelum routes)
app.use(requestLogger); 

// Pasang semua routes dari folder src/routes/index.ts (Base URL: /api/v1)
app.use('/api/v1', routes);

// Middleware penanganan error global
app.use(errorHandler);

export default app;