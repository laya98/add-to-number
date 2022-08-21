const express = require('express')
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.get('/', function (req, res) {
  res.sendFile(__dirname+"/index.html")
})
app.post('/', function (req, res) {
    num1=Number(req.body.n1)
    num2=Number(req.body.n2)
    result=num1+num2
    res.send("this is the result"+ result)

  })
  

app.listen(3000)