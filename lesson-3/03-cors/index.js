import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());

// function checkAPI(req, res, next) {
//   const { key } = req.query;
//   if (key !== '12345') {
//     return res.status(401).send({ message: 'Please provide API key' });
//   } else {
//     next();
//   }
// }

// app.use(checkAPI);
app.use(express.json());

app.get('/', (req, res) => {
  res.send('get / done');
});

app.listen(8080, () => {
  console.log('8080 port');
});
