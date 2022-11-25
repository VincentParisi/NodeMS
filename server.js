require('dotenv').config();
var express = require('express');

const  cl = console.log 


const app = express();
const  port =process.env.PORT || 3100; 


app.get('/', (req, res) => {
  let result = " Bonjour Caculette , add , diff , provide a and b as argument  "
   res.json(result)
})

app.get('/add', (req, res) => {
    let filter = req.query
      cl (" filter " , filter )
    let result = parseInt(filter.a) + parseInt(filter.b)
       res.json(result)
 })

 app.get('/div', (req, res) => {
    let filter = req.query
      cl (" filter " , filter )
    let result = parseInt(filter.a) - parseInt(filter.b)
       res.json(result)
 })

 app.listen(port, () => {
    cl (`Up and Running on port ${port} - This is Book service`);
})
