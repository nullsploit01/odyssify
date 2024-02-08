import express from 'express';
import { environment } from 'src/config/environment';
import { logger } from 'src/config/logger';

const app = express();

app.get('/ping', (req, res) => {
  return res.json('pong');
});

app.listen(environment.PORT, () => {
  logger.info(`Server listening on port ${environment.PORT}`);
});
