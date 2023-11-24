import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050 ;

app.get('/', (req, res) => {
  res.send('Hello, this is your Express app!');
  return res.status(200).send('Welcome')
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
