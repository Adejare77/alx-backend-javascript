const express = require('express');

app = express();
app.use(express.json())
const port = 7865;

app.get('/', (req, resp) => {
  resp.status(200).send('Welcome to the payment system');
})

app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id
  res.status(200).send(`Payment methods for cart ${req.params.id}`)
})

app.get('/available_payments', (req, res) => {
  res.status(200).json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  })
})

app.post('/login', (req, res) => [
  res.status(200).send(`Welcome ${req.body.userName}`)
])

app.listen(port, () => {
  console.log('API available on localhost port 7865')
})

module.exports = app;
