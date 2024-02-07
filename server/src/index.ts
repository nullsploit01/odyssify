import express from 'express';

const app = express();

const PORT = process.env.PORT || 5001;

app.get('/ping', (req, res) => {
  return res.json('pong');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
