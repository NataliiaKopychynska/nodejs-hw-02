import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('get / done');
});

app.post('/', (req, res) => {
  console.log(req.body);

  res.send('post');
});

app.listen(8080, () => {
  console.log('port 8080');
});
