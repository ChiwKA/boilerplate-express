let express = require('express');
let app = express();
require('dotenv').config();

// app.get("/", function(req, res) {
//   res.sendFile(__dirname + '/views/index.html')
// })

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`)
  next()
})

app.get('/now', (req, res, next) => {
  req.time = new Date().toString()
  next()
}, (req, res) => {
  res.send({"time": req.time})
})

app.route('/name').get((req, res) => {
  res.send({ "name" : req.query.first + " " + req.query.last})
}).post()

app.get('/:word/echo', (req, res, next) => {
  next()
}, (req, res) => {
  res.send({"echo": req.params.word})
})

app.get('/json', (req, res) => {
  console.log(process.env.MESSAGE_STYLE)
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({"message": "HELLO JSON"})
  } else {
    res.json({"message": "Hello json"})
  }
})


app.use('/public', express.static(__dirname + '/public'))






































 module.exports = app;
