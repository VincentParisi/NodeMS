var express = require('express');

const  cl = console.log 


const app = express();
const  port =process.env.PORT || 3100; 


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
    console.log(`Up and Running on port ${port} - This is Book service`);
//    main()
})
