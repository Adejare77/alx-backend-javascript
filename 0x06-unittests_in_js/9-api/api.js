const express = require('express');

app = express();
const port = 7865;

app.get('/', (req, resp) => {
  resp.status(200).send('Welcome to the payment system');
})

app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id
  res.status(200).send(`Payment methods for cart ${req.params.id}`)
})

app.listen(port, () => {
  console.log('API available on localhost port 7865')
})

module.exports = app;
