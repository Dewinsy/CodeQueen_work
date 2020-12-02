var express = require('express')
var app = express()
const cors = require("cors")
app.use(cors())
const bodyParse = require("body-parse")
app.use(bodyParse())

app.get('/getUser', function (req, res) {
  res.send({
      name: 'Jeffrey Dozva',
      location: 'Ntinda Kampala',
      salary: 1000000,
  })
})
app.post('/salary',function (req, res){
const name = req.body.name

res.send({
    name
})
})
app.listen(3000)