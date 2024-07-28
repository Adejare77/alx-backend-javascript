const express = require('express');

app = express();
const port = 7865;

app.get('/', (req, resp) => {
  resp.status(200).send('Welcome to the payment system');
})

app.listen(port, () => {
  console.log('API available on localhost port 7865')
})

module.exports = app;
