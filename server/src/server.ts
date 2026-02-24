import app from './app';
import { config } from './config/env';

const startServer = () => {
  app.listen(config.port, () => {
    console.log(`Server berjalan di http://localhost:${config.port}`);
  });
};

startServer();