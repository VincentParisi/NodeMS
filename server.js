require('dotenv').config();
const express = require('express');
const cors = require("cors")
const https = require("https");
const fs = require("fs");
const  cl = console.log 


const app = express();
const  port =process.env.PORT || 3100; 

app.use(cors())
app.use(express.json())
app.use(
  cors({
    origin: "*",
  })
);


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

/*app.listen(port, () => {
    cl (`Up and Running on port ${port} - This is Book service`);
})
*/

https
  .createServer(
    {
      key: fs.readFileSync("key.pem"),
      cert: fs.readFileSync("cert.pem"),
    },
    app
  )
  .listen(port, ()=>{
    console.log(`server is runing at port ${port}`)
});
